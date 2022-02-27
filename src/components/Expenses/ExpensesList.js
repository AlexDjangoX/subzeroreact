import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        id={props.data[0].id}
        title={props.data[0].title}
        amount={props.data[0].amount}
        date={props.data[0].date}
      />
      <ExpenseItem
        id={props.data[1].id}
        title={props.data[1].title}
        amount={props.data[0].amount}
        date={props.data[1].date}
      />
      <ExpenseItem
        id={props.data[2].id}
        title={props.data[2].title}
        amount={props.data[2].amount}
        date={props.data[2].date}
      />
      <ExpenseItem
        id={props.data[3].id}
        title={props.data[3].title}
        amount={props.data[3].amount}
        date={props.data[3].date}
      />
    </Card>
  );
}

export default Expenses;
