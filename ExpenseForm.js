// ExpenseForm.js

import React, { useState } from "react";
import ExpenseUser from "./Expenseuserdetails";

const ExpenseForm = (props) => {
  const saveExpenseUserDetails = (expenseData) => {
    props.onAddExpense(expenseData);
  };

  const NewExpense = (props) => {
    const [editing, setEditing] = useState(false);

    // const saveExpenseData = (enteredExpenseData) => {
    //   const expenseData = {
    //     ...enteredExpenseData,
    //     id: Math.random().toString(),
    //   };
    //   props.onAddExpense(enteredExpenseData);
    //   setEditing(false);
    // };

    const startEditing = () => {
      setEditing(true);
    };

    const cancelToken = () => {
      setEditing(false);
    };

    return (
      <div className="expense-form">
        {!editing && <button onClick={startEditing}>Add expenses</button>}
        {editing && (
          <ExpenseUser
            onSaveExpensedata={saveExpenseUserDetails}
            onCancel={cancelToken}
          />
        )}
      </div>
    );
  };

  return (
    <div>
      <NewExpense />
    </div>
  );
};

export default ExpenseForm;
