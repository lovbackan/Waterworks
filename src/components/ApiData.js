import { useEffect } from "react";

function ApiData() {
  function fetchData() {
    fetch(
      "http://data.goteborg.se/RiverService/v1.1/MeasureSites/dfe7ae1d-a762-4356-9a7b-e70a4e7e4574?format=Json"
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
