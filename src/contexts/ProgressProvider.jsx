import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthProvider';
import { sql } from '../lib/neon';

const ProgressContext = createContext({});

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }) => {
    const { user } = useAuth();
    const [completedCourses, setCompletedCourses] = useState([]);
    const [completedItems, setCompletedItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userStats, setUserStats] = useState({
        streak: 0,
        focusTime: '0h 0m',
        modulesCleared: 0,
        totalFocusMinutes: 0
    });

    useEffect(() => {
        if (user) {
            loadProgress();
        } else {
            setCompletedCourses([]);
            setCompletedItems([]);
            setUserStats({ streak: 0, focusTime: '0h 0m', modulesCleared: 0, totalFocusMinutes: 0 });
            setLoading(false);
        }
    }, [user]);

    const calculateStats = (itemsWithDates, courses) => {
        // 1. Calculate Streak
        // Sort dates descending
        const dates = itemsWithDates
            .map(i => new Date(i.completed_at).toDateString())
            .filter((date, index, self) => self.indexOf(date) === index) // Unique dates
            .sort((a, b) => new Date(b) - new Date(a));

        let streak = 0;
        const today = new Date().toDateString();
        const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toDateString();

        if (dates.length > 0) {
            if (dates[0] === today) {
                streak = 1;
                for (let i = 1; i < dates.length; i++) {
                    const prevDate = new Date(dates[i - 1]);
                    const currDate = new Date(dates[i]);
                    const diffTime = Math.abs(prevDate - currDate);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                    if (diffDays === 1) streak++;
                    else break;
                }
            } else if (dates[0] === yesterday) {
                streak = 1;
                for (let i = 1; i < dates.length; i++) {
                    const prevDate = new Date(dates[i - 1]);
                    const currDate = new Date(dates[i]);
                    const diffTime = Math.abs(prevDate - currDate);
                    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

                    if (diffDays === 1) streak++;
                    else break;
                }
            }
        }

        // 2. Calculate Estimated Focus Time (15 mins per item)
        const totalItems = itemsWithDates.length;
        const totalMinutes = totalItems * 15;
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const focusTime = `${hours}h ${minutes}m`;

        setUserStats({
            streak,
            focusTime,
            modulesCleared: courses.length,
            totalFocusMinutes: totalMinutes
        });
    };

    const loadProgress = async () => {
        if (!user) return;

        try {
            // Load completed courses
            const courses = await sql`
                SELECT course_id 
                FROM course_progress 
                WHERE user_id = ${user.id} AND completed = true
            `;

            // Load completed items with timestamps for streak calc
            const items = await sql`
                SELECT item_id, completed_at
                FROM item_progress 
                WHERE user_id = ${user.id} AND completed = true
            `;

            setCompletedCourses(courses.map(c => c.course_id));
            setCompletedItems(items.map(i => i.item_id));

            calculateStats(items, courses);
        } catch (error) {
            console.error('Error loading progress:', error);
        } finally {
            setLoading(false);
        }
    };

    const markCourseComplete = async (courseId) => {
        if (!user) return;

        try {
            await sql`
                INSERT INTO course_progress (user_id, course_id, completed, completed_at)
                VALUES (${user.id}, ${courseId}, true, NOW())
                ON CONFLICT (user_id, course_id) 
                DO UPDATE SET completed = true, completed_at = NOW()
            `;

            const newCourses = [...new Set([...completedCourses, courseId])];
            setCompletedCourses(newCourses);
            // Re-fetch or manually update stats might be better, but for now we wait for reload or assume incremental update isn't critical for streak immediately
        } catch (error) {
            console.error('Error marking course complete:', error);
        }
    };

    const markItemComplete = async (itemId, courseId = '', unitId = '') => {
        if (!user) return;

        try {
            const result = await sql`
                INSERT INTO item_progress (user_id, item_id, course_id, unit_id, completed, completed_at)
                VALUES (${user.id}, ${itemId}, ${courseId}, ${unitId}, true, NOW())
                ON CONFLICT (user_id, item_id) 
                DO UPDATE SET completed = true, completed_at = NOW()
                RETURNING completed_at
            `;

            if (!completedItems.includes(itemId)) {
                const newItems = [...completedItems, itemId];
                setCompletedItems(newItems);

                // Increment focus time locally for immediate feedback
                // Note: accurate streak requires full history, but we can increment count
                setUserStats(prev => {
                    const newMins = prev.totalFocusMinutes + 15;
                    const h = Math.floor(newMins / 60);
                    const m = newMins % 60;
                    return {
                        ...prev,
                        totalFocusMinutes: newMins,
                        focusTime: `${h}h ${m}m`
                    };
                });
            }
        } catch (error) {
            console.error('Error marking item complete:', error);
        }
    };

    const isItemCompleted = (itemId) => {
        return completedItems.includes(itemId);
    };

    const isCourseCompleted = (courseId) => {
        return completedCourses.includes(courseId);
    };

    const getCourseItemsCompleted = (courseId, allItemIds) => {
        return allItemIds.filter(id => completedItems.includes(id)).length;
    };

    const resetProgress = async () => {
        if (!user) return;

        try {
            await sql`DELETE FROM course_progress WHERE user_id = ${user.id}`;
            await sql`DELETE FROM item_progress WHERE user_id = ${user.id}`;
            await sql`DELETE FROM task_progress WHERE user_id = ${user.id}`;

            setCompletedCourses([]);
            setCompletedItems([]);
            setUserStats({ streak: 0, focusTime: '0h 0m', modulesCleared: 0, totalFocusMinutes: 0 });
        } catch (error) {
            console.error('Error resetting progress:', error);
        }
    };

    const value = {
        completedCourses,
        completedItems,
        userStats,
        loading,
        markCourseComplete,
        markItemComplete,
        isItemCompleted,
        isCourseCompleted,
        getCourseItemsCompleted,
        resetProgress
    };

    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    );
};
