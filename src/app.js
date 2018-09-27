import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense} from './actions/expenses';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({
    description: 'water bill',
    amount: 1000,
}));

store.dispatch(addExpense({
    description: 'gas bill',
    amount: 3000,
    createdAt: 1
}));

store.dispatch(addExpense({
    description: 'rent',
    amount: 5000,
}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses , state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
    
);

ReactDOM.render(jsx, document.getElementById("app"));