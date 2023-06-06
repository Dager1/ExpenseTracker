import "./App.css";
import Balance from "./componets/Balance";
import Header from "./componets/Header";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
      </div>
    </div>
  );
}

export default App;
