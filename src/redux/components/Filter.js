import {useDispatch, useSelector} from 'react-redux';
import { setFilter } from '../actions';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(state => state.filter);
    
    return (
        <div className="filter-buttons">
            <button onClick={() => dispatch(setFilter('ALL'))} disabled={filter==='ALL'} >All</button>
            <button onClick={() => dispatch(setFilter('COMPLETED'))} disabled={filter==='COMPLETED'}>Completed</button>
            <button onClick={() => dispatch(setFilter('INCOMPLETED'))} disabled={filter==='INCOMPLETED'}>InCompleted</button>
        </div>
    );
}
export default Filter;