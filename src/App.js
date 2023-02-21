// import logo from "./logo.svg";
import "./App.css";
import ApiData from "./components/ApiData";
import Header from "./components/Header";
import Chart from "./components/Chart";
import { useState } from "react";
import ProgressBar from "./components/ProgressBar";

function App() {
  const [fetchParameters, setFetchParameters] = useState({
    startDate: "2015-04-11",
    endDate: "2016-04-12",
    stations: [3, 5, 6],
  });
  const [data, setData] = useState(null);
  console.log(data);
  return (
    <div className="App">
      <Header />
      <ApiData setData={setData} fetchParameters={fetchParameters} />
      <Chart data={data} />
      <ProgressBar setFetchParameters={setFetchParameters} />
    </div> /* ,
    (<ApiData />) , (<Chart />) */
  );
}

export default App;
