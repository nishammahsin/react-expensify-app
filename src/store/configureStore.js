import { createStore, combineReducers } from 'redux';
import expensesReducers from '../reducers/expenses';
import filterReducers from '../reducers/filters';

const configStore = () => {
const store = createStore(
    combineReducers({
        expenses: expensesReducers,
        filters: filterReducers
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() 
);
    return store;
}

export default configStore;