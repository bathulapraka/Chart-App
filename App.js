import React, { useState } from "react";

import Expenses from "./Expenses";

import ExpenseForm from "./ExpenseForm";
const dummyexpenses = [
  {
    id: "e1",
    title: "bike repair",
    amount: 198.56,
    date: new Date(2020, 1, 6),
  },
  {
    id: "e2",
    title: "medicals",
    amount: 2890.56,
    date: new Date(2020, 3, 19),
  },
  {
    id: "e3",
    title: "dinner",
    amount: 2890.56,
    date: new Date(2010, 3, 19),
  },
];

const App = () => {
  const [expenses, setexpenses] = useState(dummyexpenses);

  const addexpensehandler = (expense) => {
    setexpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <ExpenseForm onAddexpense={addexpensehandler}/>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
