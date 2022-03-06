import React from "react";

import "../Expenses/css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ item, onDelete }) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={item.date} />
      <div className="expense-item__description">
        <h2>{item.title}</h2>
        <div className="expense-item__price">{item.amount}</div>
      </div>
      {/* <button onClick={onDelete} className="text red">
        Delete
      </button> */}
      <button onClick={() => onDelete(item.id)} className="text red">
        Delete
      </button>
    </Card>
  );
};

export default ExpenseItem;
