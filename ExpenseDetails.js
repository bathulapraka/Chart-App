import React from "react";


function ExpenseDetails(props) {
  return (
    <div className="expense-details">
      <h2>{props.title}</h2>
      <div className="expense-amount-d">${props.amount}</div>
     
    </div>
  );
}

export default ExpenseDetails;
