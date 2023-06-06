import "./App.css";
import Balance from "./componets/Balance";
import Header from "./componets/Header";
import IncomeExpenses from "./componets/IncomeExpenses";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
      </div>
    </div>
  );
}

export default App;
