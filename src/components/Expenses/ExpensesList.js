import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import Card from "../UI/Card";

function ExpensesList(props) {
  const [year, setYear] = useState("2022");

  const selectedYearHandler = (year) => {
    setYear(year);
  };

  const filteredExpense = props.data.filter((expense) => {
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={selectedYearHandler} />
      {filteredExpense.map((item) => {
        return (
          <ExpenseItem
            key={Math.random()}
            id={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
}

export default ExpensesList;
