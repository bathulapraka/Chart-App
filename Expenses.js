import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem"; 

const Expenses = (props) => {
  const [filteredyear, setfilteredyear] = useState("2020");
  const filteredyearhzndler = (selectyear) => {
    setfilteredyear(selectyear);
  };

  return (
    <div>
      <div className="expenses">
        <ExpenseFilter
          selected={filteredyear}
          onChangeFilter={filteredyearhzndler}
        />
        {props.items.map((item) => (
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
