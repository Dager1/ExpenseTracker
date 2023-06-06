import "./App.css";
import { GlobalProvider } from "./Context/GlobalState";
import AddTransaction from "./componets/AddTransaction";
import Balance from "./componets/Balance";
import Header from "./componets/Header";
import IncomeExpenses from "./componets/IncomeExpenses";
import TransactionList from "./componets/TransactionList";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
