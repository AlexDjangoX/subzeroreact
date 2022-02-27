import "../Expenses/css/ExpenseItem.css";

import React from "react";

const ExpenseItem = () => {
  const expenseDate = new Date(2022, 3, 12);
  const expenseTitle = "Helicopter";
  const expenseAmount = 7654.23;

  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
