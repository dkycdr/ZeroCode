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

    useEffect(() => {
        if (user) {
            loadProgress();
        } else {
            setCompletedCourses([]);
            setCompletedItems([]);
            setLoading(false);
        }
    }, [user]);

    const loadProgress = async () => {
        if (!user) return;

        try {
            // Load completed courses
            const courses = await sql`
                SELECT course_id 
                FROM course_progress 
                WHERE user_id = ${user.id} AND completed = true
            `;

            // Load completed items
            const items = await sql`
                SELECT item_id 
                FROM item_progress 
                WHERE user_id = ${user.id} AND completed = true
            `;

            setCompletedCourses(courses.map(c => c.course_id));
            setCompletedItems(items.map(i => i.item_id));
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

            setCompletedCourses([...new Set([...completedCourses, courseId])]);
        } catch (error) {
            console.error('Error marking course complete:', error);
        }
    };

    const markItemComplete = async (itemId, courseId = '', unitId = '') => {
        if (!user) return;

        try {
            await sql`
                INSERT INTO item_progress (user_id, item_id, course_id, unit_id, completed, completed_at)
                VALUES (${user.id}, ${itemId}, ${courseId}, ${unitId}, true, NOW())
                ON CONFLICT (user_id, item_id) 
                DO UPDATE SET completed = true, completed_at = NOW()
            `;

            setCompletedItems([...new Set([...completedItems, itemId])]);
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
        } catch (error) {
            console.error('Error resetting progress:', error);
        }
    };

    const value = {
        completedCourses,
        completedItems,
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
