import React from "react";
import "./Result.css";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});


const Result = (props) => {
    console.log("result");
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((row, index) => {
          return (
            <tr key={index}>
              <td> {row.year}</td>
              <td> {formatter.format(row.savingsEndOfYear)}</td>
              <td> {formatter.format(row.yearlyInterest)}</td>
              <td>
                {formatter.format(row.savingsEndOfYear -
                  props.initialInvestment -
                  (row.yearlyContribution * row.year))}
              </td>
              <td>
                {formatter.format(props.initialInvestment + row.yearlyContribution * row.year)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Result;
