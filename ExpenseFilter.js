import React from "react";
import "./Expenseuserdetails.css"
const ExpenseFilter = (props) => {
  const dropdownchangehandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <div className="expense-filter">
      <div className="expense-filter-_control">
        <label className="filtering">FILTER BY YEAR</label>
        <select
          value={props.selected}
          onChange={dropdownchangehandler}
        >
            <option value='2020'>2020</option>
            <option value='2021'>2021</option>
            <option value='2022'>2022</option>
            <option value='2023'>2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;