import React from "react";
import ExpenseUser from "./Expenseuserdetails";

const ExpenseForm = () => {
  const saveexpenseuserdetails = (expensedata) => {
    console.log(expensedata);
  };

  return (
    <div className="expense-form">
      <ExpenseUser onSaveExpensedata={saveexpenseuserdetails} />
    </div>
  );
};
export default ExpenseForm;
