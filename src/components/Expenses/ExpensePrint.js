import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensePrint.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import react from "react";

function ExpensePrint(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        select={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          tit={expense.title}
          amt={expense.amount}
          date={expense.date}
        />
      ))}
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
    </Card>
  );
}

export default ExpensePrint;
