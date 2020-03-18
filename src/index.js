import React from "react";
import ReactDOM from "react-dom";
import ReactLists from "react-scrollable-list";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Popup, CircleMarker } from "react-leaflet";
import data from "./data.json";

const markers = data.locations.map(location => (
  <CircleMarker center={location.position} color="red" radius={location.count}>
    <Popup>
      {location.name}: {location.count}
    </Popup>
  </CircleMarker>
));

let totalCases = 0;
let cityCases = [];
let index = 0;

data.locations.forEach(element => {
  totalCases += element.count;
  cityCases.push({ id: index, content: element.name + ": " + element.count });
  index++;
});

const cityStats = React.createElement(
  "div",
  { id: "cities" },
  <ReactLists
    listItems={cityCases}
    heightOfItems={10}
    // maxItemsToRender={11}
    style={{}}
  />
);

const statistics = React.createElement("div", { id: "statistics" }, [
  React.createElement("div", { id: "totalcases" }, [
    React.createElement(
      "h4",
      { style: { "text-align": "center" } },
      "Total confirmé"
    ),
    React.createElement(
      "h2",
      { style: { "text-align": "center" } },
      totalCases
    ),
    React.createElement(
        "h4", {
          style: {
            "text-align": "center"
          }
        },
        "Total décès"
      ),
      React.createElement(
        "h2", {
          style: {
            "text-align": "center"
          }
        },
        data.deaths
      ),
      React.createElement(
          "h4", {
            style: {
              "text-align": "center"
            }
          },
          "Total guéri"
        ),
        React.createElement(
          "h2", {
            style: {
              "text-align": "center"
            }
          },
          data.recovered
        ),
    React.createElement(
      "small",
      { style: { "text-align": "center" } },
      "Dernière mise à jour:\n" + data.lastUpdate
    )
  ]),
  React.createElement("br", {}, undefined),
  cityStats
]);

ReactDOM.render(
  <App markers={markers} statistics={statistics} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
