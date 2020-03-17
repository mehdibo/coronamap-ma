import React from "react";
import { Map, TileLayer } from "react-leaflet";

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.statistics}
        <Map
        center={[29, -6]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        >
          <TileLayer url="http://tile-b.openstreetmap.fr/hot/{z}/{x}/{y}.png" />
          {this.props.markers}
        </Map>
      </div>
    );
  }
}

export default App;
