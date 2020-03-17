import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Popup, CircleMarker } from "react-leaflet";
import locationsData from "./data.json";

const markers = locationsData.map(location => (
  <CircleMarker
    center={location.position}
    color="red"
    radius={location.count * 0.3}
  >
    <Popup>Number of Corona cases: {location.count}</Popup>
  </CircleMarker>
));

ReactDOM.render(<App markers={markers} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
