import React, { useState } from "react";
import ExpensesList from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";
import { data } from "./utils/data";

function App() {
  const [expenses, setExpenses] = useState(data);

  return (
    <div>
      <NewExpense setExpenses={setExpenses} />
      <ExpensesList data={expenses} />
    </div>
  );
}

export default App;
