import React from "react";
import { Map, TileLayer } from "react-leaflet";
import Alert from '@material-ui/lab/Alert';

class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.statistics}
        <Alert style={{zIndex:99999,position:'absolute',bottom:0,margin:10, fontSize:20,fontWeight: 'bold',color:'#ecf0f1',backgroundColor:'#e74c3c'}} severity="">Numero d'urgence — 0801004747</Alert>
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
          <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png" />
          {this.props.markers}
        </Map>
        <a
          href="https://github.com/mehdibo/coronamap-ma"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source on GitHub
        </a>
      </div>
    );
  }
}

export default App;
