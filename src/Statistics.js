import React from "react";
import ReactLists from "react-scrollable-list";
import "./App.css";
import data from "./data.json";

class Statistics extends React.Component {
  render() {
    const sortedCities = this.props.cities.sort((a, b)=> parseInt(b.content.split(":")[1]) - parseInt(a.content.split(":")[1]));
    const cityStats = React.createElement(
      "div",
      { id: "cities-drawer", className: "card" },
      <ReactLists listItems={sortedCities} heightOfItems={10} />
    );

    let drawerClasses = "side-drawer";

    if (window.innerWidth >= 1210 || this.props.show) {
      drawerClasses = "side-drawer open";
    }

    return (
      <div className={drawerClasses}>
        <button
          class="close-button"
          onClick={this.props.click}
          style={{ outline: "none" }}
        >
          ×
        </button>
        <div class="row-eq-height row">
          <div class="col-sm-12 col-md-4">
            <div class="gradient-blackberry card">
              <div class="px-3 py-3 card-body">
                <div class="media">
                  <div class="white media-body">
                    <h3 class="mb-1">{this.props.caseconfirmed}</h3>
                    <span>Total confirmé</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4">
            <div class="gradient-ibiza-sunset card">
              <div class="px-3 py-3 card-body">
                <div class="media">
                  <div class="white media-body">
                    <h3 class="mb-1">{data.deaths}</h3>
                    <span>Total décès</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    style={{ enableBackground: "new 0 0 512 512" }}
                    width="56px"
                    height="56px"
                    fill="#ffffff"
                    stroke="#ffffff"
                    stroke-width="8"
                  >
                    <g id="IconsRepo_bgCarrier" />
                    <path d="M502.154,181.778H384c-4.026,0-7.646,2.644-9.142,6.382l-27.714,69.383l-22.474-97.334 c-1.035-4.489-5.012-7.62-9.65-7.608c-4.606,0.026-8.578,3.255-9.563,7.754l-55.187,252.293l-33.694-379.05 c-0.398-4.471-3.767-8.105-8.192-8.84c-4.432-0.729-8.791,1.422-10.613,5.522L121.601,201.47H9.846 c-5.437,0-9.846,4.409-9.846,9.846c0,5.438,4.409,9.846,9.846,9.846H128c3.891,0,7.417-2.098,8.998-5.654l63.33-142.397 l36.018,405.26c0.43,4.844,4.332,8.671,9.184,8.98c0.212,0.013,0.421,0.031,0.63,0.031c4.595,0,8.619-3.192,9.613-7.736 l59.561-272.278l19.688,85.315c0.967,4.193,4.547,7.273,8.838,7.603c4.313,0.334,8.299-2.357,9.898-6.353l36.909-92.464h111.488 c5.438,0,9.846-4.409,9.846-9.846C512,186.187,507.591,181.778,502.154,181.778z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4">
            <div class="gradient-green-teal card">
              <div class="px-3 py-3 card-body">
                <div class="media">
                  <div class="white media-body">
                    <h3 class="mb-1">{data.recovered}</h3>
                    <span>Total guéri</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="56"
                    height="56"
                    viewBox="0 0 56 56"
                    fill="#ffffff"
                  >
                    <path d="M 12 3.0449219 L 5 6.0449219 L 5 6 L 3 6 L 3 44 L 5 44 L 12 47 L 14 47 L 14 44 L 19.884766 44 L 19.685547 42 L 14 42 L 14 8 L 26 8 L 26 9 C 26.702 9 27.373 9.1266094 28 9.3496094 L 28 6 L 14 6 L 14 3.0449219 L 12 3.0449219 z M 12 5.2207031 L 12 44.824219 L 5 41.824219 L 5 8.2207031 L 12 5.2207031 z M 36 8 C 34.354937 8 33 9.3549372 33 11 L 33 19 C 33 20.645063 34.354937 22 36 22 L 44 22 C 45.645063 22 47 20.645063 47 19 L 47 11 C 47 9.3549372 45.645063 8 44 8 L 36 8 z M 36 10 L 44 10 C 44.562937 10 45 10.437063 45 11 L 45 19 C 45 19.562937 44.562937 20 44 20 L 36 20 C 35.437063 20 35 19.562937 35 19 L 35 11 C 35 10.437063 35.437063 10 36 10 z M 26 11 C 23.802706 11 22 12.802706 22 15 C 22 17.197294 23.802706 19 26 19 C 28.197294 19 30 17.197294 30 15 C 30 12.802706 28.197294 11 26 11 z M 39 12 L 39 14 L 37 14 L 37 16 L 39 16 L 39 18 L 41 18 L 41 16 L 43 16 L 43 14 L 41 14 L 41 12 L 39 12 z M 26 13 C 27.116414 13 28 13.883586 28 15 C 28 16.116414 27.116414 17 26 17 C 24.883586 17 24 16.116414 24 15 C 24 13.883586 24.883586 13 26 13 z M 26 20 C 22.0825 20 19 23.494797 19 27.544922 L 19 34.617188 L 21.060547 35.648438 L 22.095703 46 L 29.904297 46 L 30.939453 35.648438 L 33 34.617188 L 33 27.544922 C 33 23.494797 29.9175 20 26 20 z M 26 22 C 28.7105 22 31 24.505046 31 27.544922 L 31 33.382812 L 29.060547 34.351562 L 28.095703 44 L 23.904297 44 L 22.939453 34.351562 L 21 33.382812 L 21 27.544922 C 21 24.505046 23.2895 22 26 22 z M 10 25 A 1 1 0 0 0 9 26 A 1 1 0 0 0 10 27 A 1 1 0 0 0 11 26 A 1 1 0 0 0 10 25 z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span>Dernière mise à jour: {data.lastUpdate}</span>
        </div>
        {cityStats}
        <div class="gradient-ibiza-sunset card">
          <div class="px-3 py-3 card-body">
            <div class="media">
              <div class="white media-body">
                <span>
                  Numero d'urgence —{" "}
                  <a style={{ color: "#fff" }} href="tel://0801004747">
                    080 100 4747
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistics;
