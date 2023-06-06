import React, { useContext } from "react";
import { GlobalConstext } from "../Context/GlobalState";

function TransactionList() {
  const { transactions } = useContext(GlobalConstext);
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transactions) => (
          <li className="minus">
            {transaction.text}
            <span>-$400</span>
            <button>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
