export const addTask = (task) => ({
    type : 'ADD_TASK',
    payload: task,
});

export const deleteTask = (taskId) => ({
    type : 'DELETE_TASK',
    payload: taskId,
});

export const toggleTaskStatus = (taskId) => ({
    type : 'TOGGLE_TASK_STATUS',
    payload: taskId,
});