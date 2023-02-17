// import logo from "./logo.svg";
import "./App.css";
import ApiData from "./components/ApiData";
import Header from "./components/Header";
import Chart from "./components/Chart";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <ApiData />
      <Chart />
      <Main />
    </div> /* ,
    (<ApiData />) , (<Chart />) */
  );
}

export default App;
