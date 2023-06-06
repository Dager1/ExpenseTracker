import React from "react";

function TransactionList() {
  return (
    <div>
      <h3>Histroy</h3>
      <ul id="list" className="list">
        <li className="minus">
          Cash<span>-$400</span>
          <button>X</button>
        </li>
      </ul>
    </div>
  );
}

export default TransactionList;
