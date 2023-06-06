import React from "react";

function Transaction({ transaction }) {
  //using the turnary operator to check the sign
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    //using the turnary operator to change borader sign
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button className="delet-btn">X</button>
      </li>
    </div>
  );
}

export default Transaction;
