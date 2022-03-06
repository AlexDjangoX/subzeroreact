import React from "react";
import "../NewExpense/css/ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const onSelectingYearHandler = (event) => {
    return props.selectedYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Expenses Filter by Year</label>
        <select onChange={onSelectingYearHandler}>
          <option value="1999">1999</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="All">All</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
