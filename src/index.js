import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Popup, CircleMarker } from "react-leaflet";
import data from "./data.json";

const markers = data.locations.map(
  location =>
    location.position &&
    location.count > 0 && (
      <CircleMarker
        center={location.position}
        color="red"
        radius={(location.count * 1) / 2}
      >
        <Popup>
          {location.name}: {location.count}
        </Popup>
      </CircleMarker>
    )
);

let totalCases = 0;
let cityCases = [];
let index = 0;

data.locations.forEach(element => {
  totalCases += element.count;
  if (element.count > 0)
    cityCases.push({ id: index, content: element.name + ": " + element.count });
  index++;
});

ReactDOM.render(
  <App markers={markers} caseconfirmed={totalCases} cities={cityCases} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
