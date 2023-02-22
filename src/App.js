// import logo from "./logo.svg";
import "./App.css";
import ApiData from "./components/ApiData";
import Header from "./components/Header";
import Chart from "./components/Chart";
import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import HeroSection from "./components/HeroSection";

function App() {
  const [fetchParameters, setFetchParameters] = useState({
    startDate: "2023-02-01",
    endDate: "2023-02-10",
    stations: [1, 2, 3, 4],
  });
  const [data, setData] = useState(null);
  console.log(data);
  return (
    <div className="App">
      <Header />
      <ApiData setData={setData} fetchParameters={fetchParameters} />
      <HeroSection />
      <Chart data={data} fetchParameters={fetchParameters} />
      <ProgressBar setFetchParameters={setFetchParameters} />
    </div>
  );
}

export default App;
