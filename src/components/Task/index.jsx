import { Checkbox } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react'
import { connect } from 'react-redux'
import { addTask, deleteTask, updateStatus } from '../../store/actions'
import { useDispatch } from 'react-redux';

const Task = (props) => {
    const { id, title, status, deleteTask, updateStatus } = props

    const [checked, setChecked] = useState(status === 'pending' ? false : true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
        updateStatus(id)
    };

    const handleDelete = () => {
        deleteTask(id)
    }

    return (
        <div className='w-[100%] flex px-4 py-2 shadow-md justify-between items-center bg-[#f8fafc]'>
            <div className='left flex items-center'>
                <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'controlled' }}
                />

                <p className='text-lg'>{title}</p>
            </div>

            <div className='right'>
                <button className=' text-gray-600 px-3 py-1 rounded hover:scale-110' onClick={handleDelete} ><DeleteIcon /></button>
            </div>
        </div>
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
        deleteTask: (taskId) => dispatch(deleteTask(taskId)),
        updateStatus: (taskId) => dispatch(updateStatus(taskId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Task)