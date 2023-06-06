import "./App.css";
import AddTransaction from "./componets/AddTransaction";
import Balance from "./componets/Balance";
import Header from "./componets/Header";
import IncomeExpenses from "./componets/IncomeExpenses";
import TransactionList from "./componets/TransactionList";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
