import React from "react";
import ExpenseUser from "./Expenseuserdetails";

const ExpenseForm = (props) => {
  const saveexpenseuserdetails = (expensedata) => {
  
    props.onAddexpense(expensedata);

  };

  return (
    <div className="expense-form">
      <ExpenseUser onSaveExpensedata={saveexpenseuserdetails} />
    </div>
  );
};
export default ExpenseForm;
