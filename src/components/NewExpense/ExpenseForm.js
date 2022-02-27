import React, { useState } from "react";
import "../NewExpense/css/ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.vallue);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>{enteredTitle}</label>
          <input onChange={titleChangeHandler} type="text"></input>
        </div>
        <div className="new-expense__control">
          <label>{enteredAmount}</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>{enteredDate}</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          ></input>
        </div>
      </div>
      <div>
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
