import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBars,
  faTimes,
  faCaretDown,
  faEarthEurope,
} from "@fortawesome/free-solid-svg-icons";

import "./TopBar.css";

const TopBar = () => {
  const dropdownMenuRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  console.log(isActive);

  return (
    <div className="topBar-container">
      <div className="container">
        <div className="container-first">
          <div className="business">
            <div className="logo">Logo</div>
            <div style={{ padding: "0 12px" }}>Rims</div>
            <div style={{ fontSize: "30px" }}>I</div>
            <div className="times-of">RIMS</div>
          </div>
          <div className="search">
            <div className="search-bar">
              <input type="search" placeholder="Search City or Postcode" />
              <FontAwesomeIcon icon={faMagnifyingGlass} color="#ffffff" />
            </div>
          </div>
        </div>
        <div className="container-second">
          <div className="map">
            <FontAwesomeIcon icon={faEarthEurope} size="xl" />
            <div style={{ margin: "0 12px" }}>IN</div>
            <div style={{ fontSize: "24px", fontWeight: "300" }}>I</div>
            <div style={{ margin: "0 10px" }}>C</div>
            <FontAwesomeIcon
              icon={faCaretDown}
              size="xl"
              style={{ margin: "0 20px 0 7px" }}
            />
          </div>
          <div className="menu-icon">
            <button className="menu-icon-trigger" onClick={onClick}>
              {isActive === true ? (
                <FontAwesomeIcon icon={faTimes} size="xl" />
              ) : (
                <FontAwesomeIcon icon={faBars} size="xl" />
              )}
            </button>
            <div
              ref={dropdownMenuRef}
              className={`header-menu ${isActive ? "active" : "inactive"}`}
            >
              <div className="menu-container-first-body">
                <div>
                  <div className="menu-container-head">Forecast</div>
                  <div className="menu-container-description">
                    <button className="menu-container-button">Today</button>
                    <button className="menu-container-button">Hourly</button>
                    <button className="menu-container-button">10-day</button>
                    <button className="menu-container-button">Weekend</button>
                    <button className="menu-container-button">Monthly</button>
                  </div>
                </div>

                <div>
                  <div className="menu-container-head">Maps</div>
                  <div className="menu-container-description">
                    <button className="menu-container-button">Maps</button>
                  </div>
                </div>

                <div>
                  <div className="menu-container-head">Weather News</div>
                  <div className="menu-container-description">
                    <button className="menu-container-button">
                      Forecasts and News
                    </button>
                    <button className="menu-container-button">Monsoon</button>
                    <button className="menu-container-button">Videos</button>
                  </div>
                </div>

                <div>
                  <div className="menu-container-head">Health</div>
                  <div className="menu-container-description">
                    <button className="menu-container-button">
                      Allergy Tracker
                    </button>
                    <button className="menu-container-button">
                      COVID-19 Dashboard
                    </button>
                    <button className="menu-container-button">
                      COVID-19 News
                    </button>
                    <button className="menu-container-button">
                      Air Quality Forecast
                    </button>
                    <button className="menu-container-button">
                      Health News
                    </button>
                  </div>
                </div>
              </div>

              <div className="menu-container-second-body">
                <div>
                  <div className="menu-container-head">Science</div>
                  <div className="menu-container-description">
                    <button className="menu-container-button">Science</button>
                    <button className="menu-container-button">Space</button>
                  </div>
                </div>

                <div>
                  <div className="menu-container-head">Environment</div>
                  <div className="menu-container-description">
                    <button className="menu-container-button">
                      Biodiversity
                    </button>
                    <button className="menu-container-button">
                      Climate Change
                    </button>
                    <button className="menu-container-button">Pollution</button>
                  </div>
                </div>

                <div>
                  <div className="menu-container-head">Activities</div>
                  <div className="menu-container-description">
                    <button className="menu-container-button">
                      Travel and Lifestyle
                    </button>
                  </div>
                </div>

                <div>
                  <div className="menu-container-head">Privacy</div>
                  <div className="menu-container-description">
                    <button className="menu-container-button">
                      Data Rights
                    </button>
                    <button className="menu-container-button">
                      Privacy Policy
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
