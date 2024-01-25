import React, { useState } from "react";
import "./Expenseuserdetails.css";

const ExpenseUser = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const setTitleOfTheUser = (event) => {
    setEnteredTitle(event.target.value);
  };

  const setAmountOfTheUser = (event) => {
    setEnteredAmount(event.target.value);
  };

  const setDateOfTheUser = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandle = (event) => {
    event.preventDefault();

    const expenseAllDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpensedata(expenseAllDate);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandle}>
      <div className="all-details">
        <div className="sub-details">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={setTitleOfTheUser}
          />
        </div>
        <div className="sub-Amount">
          <label>Amount</label>
          <input
            type="number"
            min="0.002"
            max="0.004"
            value={enteredAmount}
            onChange={setAmountOfTheUser}
          />
        </div>
        <div className="sub-date">
          <label>Date</label>
          <input
            type="date"
            min="2010-9-10"
            max="2015-6-8"
            value={enteredDate}
            onChange={setDateOfTheUser}
          />
        </div>
      </div>
      <div>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expenses</button>
      </div>
    </form>
  );
};

export default ExpenseUser;
