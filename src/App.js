import React, { useState } from "react";
import Expenses from "./components/Expenses/ExpensesList";
import NewExpense from "./components/NewExpense/NewExpense";
import { data } from "./utils/data";

function App() {
  const [expenses, setExpenses] = useState([]);

  return (
    <div>
      <NewExpense setExpenses={setExpenses} />
      <Expenses data={expenses} />
    </div>
  );
}

export default App;
