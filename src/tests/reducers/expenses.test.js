import expenseReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set deafult state', () => {
    const state = expenseReducers(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '1'
    }
    const state = expenseReducers(expenses, action);
    expect(state).toEqual([expenses[1], expenses[2]]);
});

test('should not remove expense by id which does not exist', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expenseReducers(expenses, action);
    expect(state).toEqual(expenses);
});

test('should edit expense with updated value provided', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        updates: {
            amount: 100
        },
        id: expenses[1].id
    };
    const state = expenseReducers(expenses, action);
    expect(state[1].amount).toBe(100);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense: {
            description: 'abc',
            note: 'note1',
            amount: 1000,
            id: '2000'
        }
    };
    const state = expenseReducers(expenses, action);
    expect(state).toEqual([...expenses, action.expense]);
});