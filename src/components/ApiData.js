import { wait } from "@testing-library/user-event/dist/utils";
import { useEffect } from "react";

function ApiData() {
  
  let selectedStations = [5, 4, 1]; //Only for testing purposes. 
  let stations = []; //Contains all available stations after fetch.
 

  //Returns promise with 2dArray[station][day]
  function getSelectedStationsData(stationIDs, startDate, endDate) //StationIDs = array of IDs, Dates = YYYY-MM-DD
  { 
    return new Promise((resolve) => { Promise.all(stationIDs.map((stationID) => {
      return getStationData(stations[stationID].Code, startDate, endDate)
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
        // Stations = data;
        // getSelectedStationsData(selectedStations, "2020-09-09", "2021-09-09");
      });
    })
  }
  //Shouldn't really be part of useEffect. Left this here for testing and to show how the functions work together
  useEffect(() => {
    getStations()
    .then((result) =>{
      stations = result;
      console.log(stations);
      getSelectedStationsData(selectedStations, "2022-05-05", "2022-06-05")
      .then((results) => console.log(results));
    })
  });

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
