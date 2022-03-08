import React from "react";

import "../Expenses/css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

// const ExpenseItem = ({ item, onDelete })

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.item.date} />
      <div className="expense-item__description">
        <h2>{props.item.title}</h2>
        <div className="expense-item__price">{props.item.amount}</div>
      </div>
      {/* <button onClick={onDelete} className="text red">
        Delete
      </button> */}
      <button
        onClick={() => props.onRemoveExpense(props.item.id)}
        className="text red"
      >
        Delete
      </button>
    </Card>
  );
};

export default ExpenseItem;
