import { ADD_TASK, DELETE_TASK, UPDATE_STATUS, DELETE_ALL } from './types.js';

export const addTask = (task) => ({
    type: ADD_TASK,
    payload: task,
});

export const deleteTask = (taskId) => ({
    type: DELETE_TASK,
    payload: taskId,
});

export const updateStatus = (taskId) => ({
    type: UPDATE_STATUS,
    payload: taskId,
})

export const deleteAll = () => ({
    type: DELETE_ALL,
})