import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense,addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense : expenses[2]
        
    })
});

test('should add expense to databse and store', (done) => {
 const store = createMockStore({});
 const expenseData = {
     description: 'Mouse',
     amount: 900,
     note: 'test',
     createdAt: 1000
 };

 store.dispatch(startAddExpense(expenseData)).then(() => {
  expect(action[0]).toEqual({
      expense: {
          id: expect.any(String),
          ...expenseData
      }
  });

  return database.ref(`expenses/${actions[0].expense.id}`).once('value')
 
 }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done(); 
  });
});

test('should add expense with defaults to databse and store', (done) => {
    const store = createMockStore({});
    const expenseDefault = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    };
   
    store.dispatch(startAddExpense({})).then(() => {
     expect(action[0]).toEqual({
         expense: {
             id: expect.any(String),
             ...expenseDefault
         }
     });
   
     return database.ref(`expenses/${actions[0].expense.id}`).once('value')
    
    }).then((snapshot) => {
       expect(snapshot.val()).toEqual(expenseDefault);
       done(); 
     });
})

// test('Should setup add expense action object with deafult values', () => {
//     const deafultExpense = {
//         description: '',
//         note: '', 
//         amount: 0, 
//         createdAt: 0 
//     };

//     const action = addExpense();

//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense : {
//             ...deafultExpense,
//             id: expect.any(String)
//         }
        
//     })
// });