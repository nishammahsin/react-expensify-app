import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return zero if no expenses', () => {
    const res = selectExpensesTotal([]);
    expect(res).toBe(0);
});

test('should correctly add single expense', () => {
    const res = selectExpensesTotal([expenses[2]]);
    expect(res).toBe(3);
});

test('should add up multiple expenses', () => {
    const res = selectExpensesTotal(expenses);
    expect(res).toBe(6);
});