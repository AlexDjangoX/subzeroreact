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
    if (year === "All") {
      return props.data;
    }
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={selectedYearHandler} />
      {filteredExpense.length === 0 ? (
        <p>There are no items listed for this year</p>
      ) : (
        filteredExpense.map((item) => {
          return (
            <ExpenseItem
              key={Math.random()}
              id={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
              onDelete={props.onRemoveHandler}
              // onDelete={() => props.onRemoveHandler(item.id)}
            />
          );
        })
      )}
    </Card>
  );
}

export default ExpensesList;
