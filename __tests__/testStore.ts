import { combineReducers, configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../src/services/redux/reducers/tasksPage/actions/tasksActions';

const reducers = combineReducers({
    tasks: tasksReducer
});

const testStore = configureStore({
    reducer: reducers
});

export default testStore;