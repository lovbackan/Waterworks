import { useEffect } from "react";

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

  return <p>Hello World!</p>;
}

export default ApiData;
