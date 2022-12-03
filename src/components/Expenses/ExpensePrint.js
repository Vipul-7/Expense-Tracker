import React, { useState } from "react";
// import ExpenseItem from "./ExpenseItem";
import "./ExpensePrint.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function ExpensePrint(props) {
  const [filteredYear, setFilteredYear] = useState("2024");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // for filltering the date
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <Card className="expenses">
      <ExpensesFilter
        select={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>

{/* <ExpenseItem
        tit={props.items[0].title}
        amt={props.items[0].amount}
        date={props.items[0].date}
      ></ExpenseItem>
      <ExpenseItem
        tit={props.items[1].title}
        amt={props.items[1].amount}
        date={props.items[1].date}
      ></ExpenseItem>
      <ExpenseItem
        tit={props.items[2].title}
        amt={props.items[2].amount}
        date={props.items[2].date}
      ></ExpenseItem>
      <ExpenseItem
        tit={props.items[3].title}
        amt={props.items[3].amount}
        date={props.items[3].date}
      ></ExpenseItem> */}
  );
}

export default ExpensePrint;
