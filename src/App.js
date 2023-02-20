// import logo from "./logo.svg";
import "./App.css";
import ApiData from "./components/ApiData";
import Header from "./components/Header";
import Chart from "./components/Chart";
import Main from "./components/Main";
// import { CheckBox } from "./components/CheckBox";
// import { DatePicker } from "./components/DatePicker";
// import Cricle from "./components/Circle";

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
