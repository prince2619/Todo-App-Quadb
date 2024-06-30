import { ADD_TASK, DELETE_TASK, UPDATE_STATUS, DELETE_ALL } from './types';

const loadTasksFromLocalStorage = () => {
    try {
        const serializedTasks = localStorage.getItem('tasks');
        if (serializedTasks === null) {
            return undefined; 
        }
        return JSON.parse(serializedTasks);
    } catch (err) {
        console.error('Error loading tasks from local storage:', err);
        return undefined;
    }
};

// Function to save tasks to local storage
const saveTasksToLocalStorage = (tasks) => {
    try {
        const serializedTasks = JSON.stringify(tasks);
        localStorage.setItem('tasks', serializedTasks);
    } catch (err) {
        console.error('Error saving tasks to local storage:', err);
    }
};

// Load tasks from local storage or use initial state if none found
const initialState = {
    tasks: loadTasksFromLocalStorage() || [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            const newStateAdd = {
                ...state,
                tasks: [...state.tasks, action.payload],
            };
            saveTasksToLocalStorage(newStateAdd.tasks);
            return newStateAdd;
        case DELETE_TASK:
            const newStateDelete = {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload),
            };
            saveTasksToLocalStorage(newStateDelete.tasks);
            return newStateDelete;

        case UPDATE_STATUS:
            const newStateUpdate = {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.payload) {
                        task.status = task.status === 'pending' ? 'completed' : 'pending';
                    }
                    return task;
                }),
            };
            saveTasksToLocalStorage(newStateUpdate.tasks);
            return newStateUpdate;
        
        case DELETE_ALL:
            const newStateDeleteAll = {
                ...state,
                tasks: [],
            };
            saveTasksToLocalStorage(newStateDeleteAll.tasks);
            return newStateDeleteAll;
        default:
            return state;
    }
};

export default todoReducer;
