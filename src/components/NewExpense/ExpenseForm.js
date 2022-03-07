// two-way-binding: Listen changes update state & feed state back into input, allows us to set value line 29 - 31

import React, { useState } from "react";
import "../NewExpense/css/ExpenseForm.css";

const ExpenseForm = ({ setExpenses }) => {
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
    setEnteredDate(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      id: Math.random(),
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setExpenses((prevs) => {
      return [...prevs, expenseData];
    });
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            type="text"
            value={enteredTitle}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
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
