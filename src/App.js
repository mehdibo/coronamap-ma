import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import data from "./data.json";
import { Map, TileLayer } from "react-leaflet";

const Styles = {
  table: {
    minWidth: 150
  },
  tableContainer: {
    zIndex: 9999999,
    position: "absolute",
    width: 300,
    margin: 10
  }
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Total:0
    };
  }
  componentDidMount = () => {
    var res = 0
    data.locations.map(location => {
      res += location.count;
    });
    this.setState({
      Total:res
    })
  };
  render() {
    return (
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

        <TableContainer component={Paper} style={Styles.tableContainer}>
          <Table style={Styles.table} align="right">
            <TableHead>
              <TableRow style={{ width: 100 }}>
                <TableCell>Total In Morocco</TableCell>
                <TableCell align="right" style={{color:'red',fontSize:20}}>{this.state.Total}</TableCell>
              </TableRow>
            </TableHead>
          </Table>
          <Table style={Styles.table}>
            <TableHead>
              <TableRow style={{ width: 100 }}>
                <TableCell>cities</TableCell>
                <TableCell align="right">count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.locations.map(location => (
                <TableRow key={location.name}>
                  <TableCell component="th" scope="row">
                    {location.name}
                  </TableCell>
                  <TableCell align="right">{location.count}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Map>
    );
  }
}

export default App;
