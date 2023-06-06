import React, { useState } from "react";
import { GlobalConstext } from "../Context/GlobalState";

function Transaction({ transaction }) {
  //using the turnary operator to check the sign
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    //using the turnary operator to change borader sign
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}{" "}
        <span>
          {sign}
          {moneyFormatter(transaction.amount)}
        </span>
        <button
          onClick={() => deleteTransaction(transaction.id)}
          className="delete-btn">
          x
        </button>
      </li>
    </div>
  );
}

export default Transaction;
