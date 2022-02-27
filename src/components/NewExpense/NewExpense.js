import React from "react";
import ExpenseForm from "./ExpenseForm";
import "../NewExpense/css/NewExpense.css";

const NewExpense = ({ setExpenses }) => {
  return (
    <div className="new-expense">
      <ExpenseForm setExpenses={setExpenses} />
    </div>
  );
};

export default NewExpense;
