export const evaluateCode = (userCode, tasks) => {
    return tasks.map(task => {
        if (task.regex) {
            return task.regex.test(userCode);
        }
        return false;
    });
};
