
import React,{ useState } from "react";
import "./Expenseuserdetails.css";

const ExpenseUser = (props) => {
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

    const expensealldate = {
      title: enteredtitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };
    props.onSaveExpensedata(expensealldate);
    setTtle("");
    setAmount("");
    setDate("");
   
  };

  return (
    <div className="submit-form">
    
    <form onSubmit={submithandle}>
      <div className="all-details">
        <div className="sub-details">
          <label>Title</label>
          <input type="text" value={enteredtitle} onChange={settitleoftheuser} />
         
        </div>
        <div className="sub-Amount">
          <label>Amount</label>
          <input
            type="number"
            min="0.002"
            max="0.004"
            value={enterAmount}
            onChange={setAmountoftheuser}
          />
        </div>
        <div className="sub-date">
          <label>Date</label>
          <input
            type="date"
            min="2010-9-10"
            max="2015-6-8"
            value={enterDate}
            onChange={setDateoftheuser}
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
      
      </div>
  );
};

export default ExpenseUser;
