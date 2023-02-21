import { useState, useEffect } from "react";
import Circle from "./Circle";
import CheckBox from "./CheckBox";
import DatePicker from "./DatePicker";
import "./Progress.css";

const ProgressBar = ({ setFetchParameters }) => {
  const [circle] = useState(3);
  const [active, setActive] = useState(0);
  const [width, setWidth] = useState(0);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [stations, setStations] = useState([]);
  let data = {
    startDate: startDate, //yyyy-mm-dd
    endDate: endDate, // yyyy-mm-dd
    stations: stations, ////börja gör så att man välja mellan 4 stationer tex [1,3,4]
  };

  const handleCheckboxes = (checkedItems) => {
    setStations(checkedItems);
    console.log("Checked items:", checkedItems);
  };

  const handleChangeStartDate = (value) => {
    console.log("NEW START DATE RECIEVED", value);
    setStartDate(value);
  };

  const handleChangeEndDate = (value) => {
    console.log("NEW END DATE RECIEVED", value);
    setEndDate(value);
  };

  useEffect(() => {
    console.log(active);
    setWidth((100 / (circle - 1)) * active);
  }, [circle, active]);

  const arr = [];
  const arrInfo = [];
  const stepInfo = ["Start Date", "End Date", "Stations"];
  for (let i = 0; i < circle; i++) {
    arr.push(
      <Circle classname={i <= active ? "circle active" : "circle"} key={i}>
        {i + 1}
      </Circle>
    );

    arrInfo.push(<p className="stepInfo">{stepInfo[i]}</p>);
  }

  let form;
  let controller;

  if (active === 0) {
    form = <DatePicker setDate={handleChangeStartDate} />;
    controller = startDate;
  } else if (active === 1) {
    controller = endDate && endDate > startDate;
    form = <DatePicker setDate={handleChangeEndDate} />;
  } else if (active === 2) {
    controller = stations;
    form = <CheckBox handleCheckboxes={handleCheckboxes} />;
  }

  return (
    <div className="container">
      <div className="content">
        <div className="stepInfoContainer">{arrInfo}</div>

        <div className="progressbar">
          <div className="progress" style={{ width: width + "%" }}></div>
          {arr}
        </div>
        <div className="button">
          <button
            className="prev btn"
            disabled={active > 0 ? false : true}
            onClick={() => {
              active <= 0 ? setActive(0) : setActive(active - 1);
            }}
          >
            Prev
          </button>
          <button
            className="next btn"
            disabled={active >= circle - 1 ? true : false}
            onClick={() => {
              if (controller) {
                active >= circle ? setActive(circle) : setActive(active + 1);
              }
            }}
          >
            Next
          </button>

          <button
            className="btn"
            disabled={active >= 2 && stations.length > 0 ? false : true}
            onClick={() => {
              setFetchParameters(data);
            }}
          >
            Submit
          </button>
        </div>
        {form}
      </div>
    </div>
  );
};

export default ProgressBar;
