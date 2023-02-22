import { type } from "@testing-library/user-event/dist/type";
import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react";
import { useState } from "react";

function ApiData(props) {
  const setData = props.setData;
  const fetchParameters = props.fetchParameters;
  const startDate = fetchParameters.startDate;
  const endDate = fetchParameters.endDate;
  const selectedStations = fetchParameters.stations;

  const [stations, setStations] = useState();
  const [oldFetchParameters, setOldFetchParameters] = useState(); 

  if(stations === undefined)
  {
    console.log("fetchi");
    setStations("fetching");
    getStations()
    .then((result) =>{
      console.log("fetching done!");
      setStations(result);
      setOldFetchParameters(fetchParameters);
      let tempStations = result;
      getSelectedStationsData(selectedStations, startDate, endDate, tempStations)
      .then((results) => setData(results));
    })
  } else if(stations !== "fetching" && fetchParameters !== oldFetchParameters)
  {
    setOldFetchParameters(fetchParameters);
    getSelectedStationsData(selectedStations, startDate, endDate, stations)
    .then((results) => setData(results));
  }

    
  
  
  // let stations = [];

  

  
  
  

  //Returns promise with 2dArray[station][day]
  function getSelectedStationsData(stationIDs, startDate, endDate, stationsArray) //StationIDs = array of IDs, Dates = YYYY-MM-DD
  { 
    return new Promise((resolve) => { Promise.all(stationIDs.map((stationID) => {
      return getStationData(stationsArray[stationID].Code, startDate, endDate)
    })).then((results) => {
      resolve(results);
    });
  })
  }

  //Returns array of all available stations
  function getStations() {
    return new Promise((resolve) => {
    fetch(
      `https://data.goteborg.se/RiverService/v1.1/MeasureSites/${process.env.REACT_APP_APIKEY}?format=Json`
    )
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
        // getSelectedStationsData(selectedStations, "2020-09-09", "2021-09-09");
      });
    })
  }


  //Dates in format YYYY-MM-DD. Returns array where each element = one day
  function getStationData(station, startDate, endDate)
  {
    return new Promise((resolve) => {
       fetch(
        `https://data.goteborg.se/RiverService/v1.1/Measurements/${process.env.REACT_APP_APIKEY}/${station}/Level/${startDate}/${endDate}?format=Json`
      )
      .then((response) => response.json())
      .then((data) => {
         resolve(data);
      });

    })
  }
}

export default ApiData;
