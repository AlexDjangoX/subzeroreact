import React from "react";

import "../Expenses/css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ date, amount, title, id, onDelete }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      {/* <button onClick={onDelete} className="text red">
        Delete
      </button> */}
      <button onClick={() => onDelete(id)} className="text red">
        Delete
      </button>
    </Card>
  );
};

export default ExpenseItem;
