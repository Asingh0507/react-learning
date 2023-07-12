// import React from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
    if (props.items.length === 0){
        return <h2 className = "expenses-list__fallback"> No Expenses Found </h2>;
    }

  return (
    <ul className = "expenses-list">
      {props.items.map((value) => {
        return (
          <ExpenseItem
            key={value.id}
            title={value.title}
            amount={value.amount}
            date={value.date}
          />
        );
      })}
    </ul>
  );
};

export default ExpenseList;
