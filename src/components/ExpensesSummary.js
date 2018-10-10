import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExPenses from '../selectors/expenses';
import selectExPensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formatedExpensesTotal = numeral(expensesTotal / 100).format('$0,00.00');
        return (
            <div>
                <h1> viewing {expenseCount} {expenseWord} totalling {formatedExpensesTotal}</h1>
            </div>
)};


const mapStateToProps = (state) => {
    const visibleExpenses = selectExPenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.legth,
        expensesTotal: selectExPensesTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);