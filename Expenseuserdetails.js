import React from "react";
import { useState } from "react";


const ExpenseUser = () => {
  const [enteredtitle, setTtle] = useState("");
  const [enterAmount, setAmount] = useState("");
  const [enterDate, setDate] = useState("");

  const settitleoftheuser = (event) => {
    setTtle(event.target.value);
    
  };
  const setAmountoftheuser = (event) => {
    setAmount(event.target.value);
   
  };
  const setDateoftheuser = (event) => {
    setDate(event.target.value);
    
  };
  const submithandle = (event) => {
      event.preventDefault();

      const expensealldate={
          title:enteredtitle,
          amount:enterAmount,
          date:new Date(enterDate),
      };
      console.log(expensealldate);
  };
  return (
    <form onSubmit={submithandle}>
      <div className="all-details">
        <div className="sub-details">
          <label>Title</label>
          <input type="text" onChange={settitleoftheuser} />
        </div>
        <div className="sub-details">
          <label>Amount</label>
          <input
            type="number"
            min="0.002"
            max="0.004"
            onChange={setAmountoftheuser}
          />
        </div>
        <div className="sub-details">
          <label>Date</label>
          <input
            type="date"
            min="2010-9-10"
            max="2015-6-8"
            onChange={setDateoftheuser}
          />
        </div>
      </div>
      <button type="submit" onChange={submithandle}>Submit</button>
    </form>
  );
};

export default ExpenseUser;
