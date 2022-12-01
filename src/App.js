import React, { useState } from "react";
// import ExpenseItem from "./components/ExpenseItem";
import ExpensePrint from "./components/Expenses/ExpensePrint";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "MackBook",
    amount: 95000,
    date: new Date(2025, 9, 16),
  },
  {
    title: "Bike",
    amount: 200000,
    date: new Date(2026, 9, 16),
  },
  {
    title: "apartment",
    amount: 60000,
    date: new Date(2027, 9, 16),
  },
  {
    title: "Mobile",
    amount: 120000,
    date: new Date(2024, 5, 17),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log('data arrived');
    // console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensePrint items={expenses}/>
    </div>
  );
}

export default App;
