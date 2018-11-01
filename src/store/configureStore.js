import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import expensesReducers from '../reducers/expenses';
import filterReducers from '../reducers/filters';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose
const configStore = () => {
const store = createStore(
    combineReducers({
        expenses: expensesReducers,
        filters: filterReducers
    }),
    composeEnhancers(applyMiddleware(thunk))
);
    return store;
}

export default configStore;