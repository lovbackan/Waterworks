import { useEffect } from "react";

//For getting Level from single location
// `https://data.goteborg.se/RiverService/v1.1/Measurements/${process.env.REACT_APP_APIKEY}/MolndalCentrum/Level/2020-04-22/2020-05-31?format=Json`
//Level or Flow

//For single location now
// `https://data.goteborg.se/RiverService/v1.1/MeasureSites/${process.env.REACT_APP_APIKEY}/MolndalCentrum?format=Json`

function ApiData() {
  let selectedLocations = [5, 4, 7];
  let locations = [];

  function printLocations() {
    selectedLocations.forEach((locationID) => {
      console.log(locations[locationID]);
    });
  }

  function getLocations() {
    fetch(
      `https://data.goteborg.se/RiverService/v1.1/MeasureSites/${process.env.REACT_APP_APIKEY}?format=Json`
    )
      .then((response) => response.json())
      .then((data) => {
        locations = data;
        printLocations();
      });
  }

  useEffect(() => {
    getLocations();
  });

  /*   return <p>Hello World!</p>; */
}

export default ApiData;
