import ClearAllIcon from '@mui/icons-material/ClearAll';
import { connect } from 'react-redux'
import { deleteAll } from '../../store/actions'

const Header = ({ deleteAll }) => {

    const handleDeleteAll = () => {
        deleteAll()
    }

    return (
        <header className='w-[100%] flex px-6 py-4 rounded bg-[#6366f1] items-center justify-between'>
            <h1 className='header text-center text-2xl font-medium text-[#f8fafc]'>TODO</h1>
            <button title='Delete All' onClick={handleDeleteAll} ><ClearAllIcon className='text-[#f8fafc] hover:scale-110' /></button>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.todo.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteAll: () => dispatch(deleteAll())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)