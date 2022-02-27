import React from "react";

import "../Expenses/css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ date, amount, title }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} name="ásda" />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button>Change</button>
    </Card>
  );
};

export default ExpenseItem;
