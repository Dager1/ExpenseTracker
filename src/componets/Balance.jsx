import React, { useContext } from "react";
import { GlobalConstext } from "../Context/GlobalState";
const { transactions } = useContext(GlobalConstext);

const amounts = transactions.map((transaction) => transaction.amount);
const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

function Balance() {
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </div>
  );
}

export default Balance;
