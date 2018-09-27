import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    <div>
        <Link 
            to={`/edit/${id}`} 
        >
            <h3>{description}</h3>
        </Link>
        <p>Amount: {amount}</p>
        <p>Created at: {createdAt}</p> 
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    }
};

const ConnectedExpenseListItem = connect(mapStateToProps)(ExpenseListItem);

export default ConnectedExpenseListItem;