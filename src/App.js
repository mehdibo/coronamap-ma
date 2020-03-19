import React from "react";
import { Map, ImageOverlay } from "react-leaflet";
import Statistics from "./Statistics";

class App extends React.Component {
  state = { drawerOpen: false };

  drawerToggleClickHandler = () => {
    this.setState({
      drawerOpen: !this.state.drawerOpen
    });
  };

  backdropClickHandler = () => {
    this.setState({
      drawerOpen: false
    });
  };

  render() {
    let drawerClassName = "customizer-toggle bg-danger";
    if (this.state.drawerOpen) {
      drawerClassName = "customizer-toggle bg-danger activated";
    }
    return (
      <div>
        <button
          id="drawer"
          className={drawerClassName}
          onClick={this.drawerToggleClickHandler}
          style={{
            zIndex: "3000",
            width: "54px",
            height: "74px",
            position: "absolute",
            top: "35%",
            right: "0%",
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
            outline: "none"
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30px"
            height="76px"
            viewBox="0 0 50 80"
          >
            <polyline
              fill="none"
              stroke="#FFFFFF"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
              points="45.63,75.8 0.375,38.087 45.63,0.375 "
            />
          </svg>
        </button>
        <Statistics
          show={this.state.drawerOpen}
          click={this.backdropClickHandler}
          caseconfirmed={this.props.caseconfirmed}
          cities={this.props.cities}
        />
        <Map
          center={[29, -5]}
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
          <ImageOverlay
            bounds={[
              [35.9485, -0.9984],
              [20.7664, -17.0994]
            ]}
            url="/coronamap-ma/morocco.svg"
          ></ImageOverlay>
          {this.props.markers}
        </Map>
        <a
          href="https://github.com/mehdibo/coronamap-ma"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-1"
        >
          View source on GitHub
        </a>
        -
        <a
          href="http://covidmaroc.ma/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1"
        >
          Information source
        </a>
      </div>
    );
  }
}

export default App;
