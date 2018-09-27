import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123xyz', {note: 'new note'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123xyz',
        updates: {note: 'new note'}
    })
});

test('Should setup add expense action object with provided values', () => {
    const expense = {
        id: '123abc',
        description: 'test description',
        note: 'test note',
        amount: 40,
        createdAt: 192425267
    };

    const action = addExpense(expense);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            ...expense,
            id: expect.any(String)
        }
        
    })
});

test('Should setup add expense action object with deafult values', () => {
    const deafultExpense = {
        description: '',
        note: '', 
        amount: 0, 
        createdAt: 0 
    };

    const action = addExpense();

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : {
            ...deafultExpense,
            id: expect.any(String)
        }
        
    })
});