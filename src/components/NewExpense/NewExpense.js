import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "../NewExpense/css/NewExpense.css";

const NewExpense = ({ setExpenses }) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm setExpenses={setExpenses} stopEditing={stopEditing} />
      )}
    </div>
  );
};

export default NewExpense;
