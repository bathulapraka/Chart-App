import React, { useState } from "react";
import Expenses from "./Expenses";
import ExpenseForm from "./ExpenseForm";

const App = () => {
  // State for managing all expenses
  const [expenses, setExpenses] = useState([]);

  // Function to handle adding expenses
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      {/* Render the ExpenseForm component and pass the addExpenseHandler function as a prop */}
      <ExpenseForm onAddExpense={addExpenseHandler} />

      {/* Render the Expenses component and pass the expenses as a prop */}
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
