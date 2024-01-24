import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import "./Expenseuserdetails.css"

const Expenses = (props) => {
  const [filteredyear, setfilteredyear] = useState(" ");
  const filteredyearhzndler = (selectyear) => {
    setfilteredyear(selectyear);
  };

  const FilterUsingYearExpenses = props.items.filter((item) => {
    if (filteredyear === " ") {
     return true;
    }
    return new Date(item.date).getFullYear().toString() === filteredyear;
  });

  return (
    <div>
      <div className="expenses">
        <ExpenseFilter
          selected={filteredyear}
          onChangeFilter={filteredyearhzndler}
        />
        {FilterUsingYearExpenses.length ===1 && <p className="no-expenses">Only single Expense here</p>}
        {FilterUsingYearExpenses.map((item) => (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        ))}

        
      </div>
    </div>
  );
};

export default Expenses;
