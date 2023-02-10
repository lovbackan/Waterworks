import { useEffect } from "react";

function ApiData() {
  function fetchData() {
    fetch(
      `https://data.goteborg.se/RiverService/v1.1/MeasureSites/${process.env.REACT_APP_APIKEY}?format=Json`
    )
      .then((response) => response.json())
      .then((data) => {
        data.forEach((key) => {
          console.log(key.Description);
          // console.log(key.MeasureParameters[2]);
        });
      });
  }

  useEffect(() => {
    fetchData();
  });

  return <p>Hello World!</p>;
}

export default ApiData;
