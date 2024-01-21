import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const App = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const clickhandler = () => {
    setTitle("hello");
    console.log(title);
  };
  const clickamount = () => {
    setAmount("100$");
    console.log(amount);
  };

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickhandler}>ChangeTitle</button>
      <button onClick={clickamount}>ChangeAmount</button>
    </div>
  );
};

export default App;
