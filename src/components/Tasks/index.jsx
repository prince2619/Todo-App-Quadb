import AddBoxIcon from '@mui/icons-material/AddBox';
import { connect } from 'react-redux'
import { addTask, deleteTask } from '../../store/actions'
import Task from '../Task'

// import { Dialog } from '@mui/material';
// import DialogActions from '@mui/material';
// import DialogContent from '@mui/material';
// import DialogContentText from '@mui/material';
// import DialogTitle from '@mui/material';
// import { useState } from 'react';

const Tasks = (props) => {
    const { tasks, addTask, deleteTask } = props

    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    // const handleClose = () => {
    //     setOpen(false);
    // };


    const handleAddTask = () => {
        let taskTitle = prompt('Enter task title')

        if (taskTitle) {
            addTask({
                id: new Date().getTime(),
                title: taskTitle,
                status: 'pending'
            })
        }
    }

    return (
        <>
            <div className='w-[100%] relative flex flex-col items-center p-6 pb-10 bg-white max-h-[500px]'>

                <div className="tasks-list w-[100%] flex flex-col gap-2 items-center overflow-y-scroll">
                    {tasks && tasks.map((task) => (
                        <Task key={task.id} id={task.id} title={task.title} status={task.status} />
                    ))}

                    {tasks.length === 0 && <p className='text-gray-400 h-12'>No tasks found</p>}
                </div>

                <button className='bg-[#6366f1] absolute bottom-0 translate-y-6 text-white px-6 py-3 rounded-3xl hover:scale-110 flex items-center gap-3' onClick={handleAddTask} >
                    <AddBoxIcon />
                    Add Task
                </button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.todo.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (task) => dispatch(addTask(task)),
        deleteTask: (taskId) => dispatch(deleteTask(taskId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks)