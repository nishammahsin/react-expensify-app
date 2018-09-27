import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const demoState = {
    expenses : [{
        id: 'scscnascbsn',
        description: 'monthly rent',
        note: 'this is the final payment',
        amount: '1000',
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
};

// ADD_EXPENSE
const addExpense = ({ 
    description = '',
    note = '', 
    amount = 0, 
    createdAt = 0 
} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// REMOVE_EXPENSE
const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
   type: 'EDIT_EXPENSE',
   id,
   updates
});

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

// GET VISIBLE FILTERS
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDateMatch !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDateMatch !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

const expensesReducersDefaultState = [];

const expensesReducers = (state = expensesReducersDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) =>  id !== action.id)    
        
        case 'EDIT_EXPENSE':
            console.log(action.updates);
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
}


const filtersReducersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducers = (state = filtersReducersDefaultState , action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
}

const store = createStore(
    combineReducers({
        expenses: expensesReducers,
        filters: filterReducers
    })  
);

const unsubscribe = store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const exepenseOne = store.dispatch(addExpense({
    description: 'rent',
    amount: 100,
    createdAt: 1000
}));

const exepenseTwo = store.dispatch(addExpense({
    description: 'coffee',
    amount: 300,
    createdAt: -1000
}));

// store.dispatch(removeExpense({id: exepenseOne.expense.id}));

// store.dispatch(editExpense(exepenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));

// store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(135));

