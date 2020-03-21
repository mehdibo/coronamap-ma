import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Popup, CircleMarker } from "react-leaflet";
import locations from "./locations.json"

let markers = null;
let totalCases = 0;
let cityCases = [];
let index = 0;

const header = new Headers();
header.append('Content-Type', 'application/json');
const options = {
  method: 'POST',
  header,
  body: '{"type": "get_data"}'
};
const request = new Request('https://app.siendogroup.com/api', options);

fetch(request).then(res => {
  return res.json();
}).then(dd => {
  let data = dd.data.sort((a, b) => parseInt(b.region_code.split("MA")[1]) - parseInt(a.region_code.split("MA")[1])).reverse();
  data.forEach(element => {
    totalCases += element.confirmed;
    cityCases.push({ id: index, content: element.region_name_en + ": " + element.confirmed });
    locations[index].count = element.confirmed;
    index++;
  })
  markers = locations.map(
    location =>
    location.position && (
      <CircleMarker
        center={location.position}
        color="red"
        radius={location.count}
      >
        <Popup>
          {location.name}: {location.count}
        </Popup>
      </CircleMarker>
    )
  )
  ReactDOM.render(
    <App markers={markers} caseconfirmed={totalCases} cities={cityCases} />,
    document.getElementById("root")
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
