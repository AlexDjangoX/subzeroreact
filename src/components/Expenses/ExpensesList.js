import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../NewExpense/ExpenseFilter";
import Card from "../UI/Card";

function ExpensesList(props) {
  const [year, setYear] = useState("2022");

  const selectedYearHandler = (year) => {
    setYear(year);
  };

  return (
    <Card className="expenses">
      <ExpenseFilter selectedYear={selectedYearHandler} />
      {props.data.map((item) => {
        return (
          <ExpenseItem
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
