import React, { useState } from "react";
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";
import { data } from "./utils/data";

function App() {
  const [expenses, setExpenses] = useState(data);

  const onRemoveExpense = (id) => {
    const newExpensesList = expenses.filter((expense) => expense.id !== id);
    setExpenses(newExpensesList);
  };

  return (
    <div>
      <NewExpense setExpenses={setExpenses} />
      <ExpensesList data={expenses} onRemoveHandler={onRemoveExpense} />
    </div>
  );
}

export default App;
