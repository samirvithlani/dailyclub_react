import React from 'react';
import { AddExpense } from './AddExpense';
import { Link } from 'react-router-dom';


export const ExpenseManager = () => {
  return (
    <div className="container-fluid bg-light min-vh-100 d-flex flex-column align-items-center justify-content-center">
      <div className="text-center">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2920/2920076.png"
          alt="Expense Manager"
          className="img-fluid mb-4"
          style={{ maxWidth: '150px' }}
        />
        <h1 className="display-4 fw-bold mb-4 text-primary">Expense Manager</h1>
        <div className="d-flex gap-3 justify-content-center">
          <Link to = "/addexpense" className="btn btn-success btn-lg shadow-sm">
            ➕ Add Expense
          </Link>
          <Link to = "/viewexpense"className="btn btn-outline-primary btn-lg shadow-sm">
            📊 View Expenses
          </Link>
        </div>
      </div>
    </div>
  );
};
