import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthProvider';
import { supabase } from '../lib/supabase';

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
            const { data: courses, error: coursesError } = await supabase
                .from('course_progress')
                .select('course_id')
                .eq('user_id', user.id)
                .eq('completed', true);

            if (coursesError) throw coursesError;

            // Load completed items
            const { data: items, error: itemsError } = await supabase
                .from('item_progress')
                .select('item_id')
                .eq('user_id', user.id)
                .eq('completed', true);

            if (itemsError) throw itemsError;

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
            const { error } = await supabase
                .from('course_progress')
                .upsert({
                    user_id: user.id,
                    course_id: courseId,
                    completed: true,
                    completed_at: new Date().toISOString(),
                }, {
                    onConflict: 'user_id,course_id'
                });

            if (error) throw error;

            setCompletedCourses([...new Set([...completedCourses, courseId])]);
        } catch (error) {
            console.error('Error marking course complete:', error);
        }
    };

    const markItemComplete = async (itemId, courseId = '', unitId = '') => {
        if (!user) return;

        try {
            const { error } = await supabase
                .from('item_progress')
                .upsert({
                    user_id: user.id,
                    item_id: itemId,
                    course_id: courseId,
                    unit_id: unitId,
                    completed: true,
                    completed_at: new Date().toISOString(),
                }, {
                    onConflict: 'user_id,item_id'
                });

            if (error) throw error;

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
            // Delete all progress for user
            await supabase.from('course_progress').delete().eq('user_id', user.id);
            await supabase.from('item_progress').delete().eq('user_id', user.id);
            await supabase.from('task_progress').delete().eq('user_id', user.id);

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
