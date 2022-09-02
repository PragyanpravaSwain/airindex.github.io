import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./Body.css";
import pollution1 from "../assets/images/pollution1.jpg";

const Body = () => {
  return (
    <div className="body-container">
      <div className="card">
        <div className="card-heading">
          <div style={{ fontSize: "2rem", fontWeight: "bold" }}>
            Today's Air Quality
          </div>
          <div style={{ paddingTop: "8px", marginLeft: "6px" }}>
            - Rajbansi Nagar, Bihar
          </div>
        </div>
        <div className="card-inner">
          <div className="card-inner-circularProgressbar">
            <CircularProgressbar
              value={80}
              text={80}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,

                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: "butt",

                // Text size
                textSize: "32px",

                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 0.5,

                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',

                // Colors
                pathColor: `#ffd400`,
                textColor: "#000000",
                trailColor: "#d6d6d6",
                backgroundColor: "#3e98c7",
              })}
            />
          </div>

          <div className="card-inner-text">
            <div className="card-inner-text-heading">Moderate</div>
            <div className="card-inner-text-description">
              May cause breathing discomfort for people with prolonged exposure,
              and discomfort to people with heart disease.
            </div>
          </div>
          <div className="card-inner-text-right">
            <div className="card-inner-text-right-heading">
              Primary Pollutant:
            </div>
            <div className="card-inner-text-right-description">
              PM2.5 (Particulate matter less than 2.5 microns)
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-heading">
          <div style={{ fontSize: "1.3rem", fontWeight: "500" }}>
            All Pollutants
          </div>
        </div>
        <div className="all-pollutant-container">
          <div className="all-pollutant-container-each">
            <div className="all-pollutant-container-circularProgressbar">
              <CircularProgressbar
                value={80}
                text={80}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "32px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `#ffd400`,
                  textColor: "#000000",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
            <div className="all-pollutant-container-text">
              <div className="all-pollutant-container-text-head">
                O3 (Ozone)
              </div>
              <div className="all-pollutant-container-text-status">Poor</div>
              <div className="all-pollutant-container-text-footer">
                203.27 μg/m3
              </div>
            </div>
          </div>

          <div className="all-pollutant-container-each">
            <div className="all-pollutant-container-circularProgressbar">
              <CircularProgressbar
                value={20}
                text={20}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "32px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `#ff0000`,
                  textColor: "#000000",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
            <div className="all-pollutant-container-text">
              <div className="all-pollutant-container-text-head">
                NO2 (Nitrogen Dioxide)
              </div>
              <div className="all-pollutant-container-text-status">Good</div>
              <div className="all-pollutant-container-text-footer">
                29.65 μg/m3
              </div>
            </div>
          </div>
        </div>

        <div className="all-pollutant-container">
          <div className="all-pollutant-container-each">
            <div className="all-pollutant-container-circularProgressbar">
              <CircularProgressbar
                value={57}
                text={57}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "32px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `#9900ff`,
                  textColor: "#000000",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
            <div className="all-pollutant-container-text">
              <div className="all-pollutant-container-text-head">
                SO2 (Sulphur Dioxide)
              </div>
              <div className="all-pollutant-container-text-status">Good</div>
              <div className="all-pollutant-container-text-footer">
                19.19 μg/m3
              </div>
            </div>
          </div>

          <div className="all-pollutant-container-each">
            <div className="all-pollutant-container-circularProgressbar">
              <CircularProgressbar
                value={90}
                text={90}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "32px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `#5ccf65`,
                  textColor: "#000000",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
            <div className="all-pollutant-container-text">
              <div className="all-pollutant-container-text-head">
                PM2.5 (Particulate matter less than 2.5 microns)
              </div>
              <div className="all-pollutant-container-text-status">
                Moderate
              </div>
              <div className="all-pollutant-container-text-footer">
                90.85 μg/m3
              </div>
            </div>
          </div>
        </div>

        <div className="all-pollutant-container">
          <div className="all-pollutant-container-each">
            <div className="all-pollutant-container-circularProgressbar">
              <CircularProgressbar
                value={38}
                text={38}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "32px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `#0089ff`,
                  textColor: "#000000",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
            <div className="all-pollutant-container-text">
              <div className="all-pollutant-container-text-head">
                PM10 (Particulate matter less than 10 microns)
              </div>
              <div className="all-pollutant-container-text-status">
                Moderate
              </div>
              <div className="all-pollutant-container-text-footer">
                133.41 μg/m3
              </div>
            </div>
          </div>

          <div className="all-pollutant-container-each">
            <div className="all-pollutant-container-circularProgressbar">
              <CircularProgressbar
                value={75}
                text={75}
                styles={buildStyles({
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  strokeLinecap: "butt",

                  // Text size
                  textSize: "32px",

                  // How long animation takes to go from one percentage to another, in seconds
                  pathTransitionDuration: 0.5,

                  // Can specify path transition in more detail, or remove it entirely
                  // pathTransition: 'none',

                  // Colors
                  pathColor: `#ff8100`,
                  textColor: "#000000",
                  trailColor: "#d6d6d6",
                  backgroundColor: "#3e98c7",
                })}
              />
            </div>
            <div className="all-pollutant-container-text">
              <div className="all-pollutant-container-text-head">
                CO (Carbon Monoxide)
              </div>
              <div className="all-pollutant-container-text-status">Good</div>
              <div className="all-pollutant-container-text-footer">
                706.03 μg/m3
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-heading">
          <div
            style={{
              fontWeight: "500",
              fontSize: "1.25rem",
              lineHeight: "1.2",
            }}
          >
            Pollution
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <div className="pollution-img">
              <img
                src={pollution1}
                alt="Pollution"
                width="100%"
                height="100%"
              />
            </div>
            <div className="pollution-text">
              <a>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </a>
            </div>
          </div>

          <div>
            <div className="pollution-img">
              <img
                src={pollution1}
                alt="Pollution"
                width="100%"
                height="100%"
              />
            </div>
            <div className="pollution-text">
              <a>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </a>
            </div>
          </div>

          <div>
            <div className="pollution-img">
              <img
                src={pollution1}
                alt="Pollution"
                width="100%"
                height="100%"
              />
            </div>
            <div className="pollution-text">
              <a>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </a>
            </div>
          </div>

          <div>
            <div className="pollution-img">
              <img
                src={pollution1}
                alt="Pollution"
                width="100%"
                height="100%"
              />
            </div>
            <div className="pollution-text">
              <a>
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
