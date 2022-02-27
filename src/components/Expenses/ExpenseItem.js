import React from "react";
import "../Expenses/css/ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  let title = props.title;
  const clickHandler = () => {
    title = "new";
    console.log("title");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change</button>
    </Card>
  );
};

export default ExpenseItem;
