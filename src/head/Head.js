import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

import "./Head.css";

const Head = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);
  console.log(isActive);
  return (
    <>
      <div className="head-container"></div>
      <div className="header">
        <div className="header-text">Today</div>
        <div className="header-text">Hourly</div>
        <div className="header-text">10 Day</div>
        <div className="header-text">Weekend</div>
        <div className="header-text">Monthly</div>
        <div className="header-text">Radar</div>
        <div
          className="header-text"
          style={{ display: "flex", alignItems: "center" }}
        >
          <FontAwesomeIcon icon={faCirclePlay} size="xl" />
          <div style={{ marginLeft: "7px" }}>Video</div>
        </div>
        <div className="more-forecasts">
          <button className="more-forecasts-trigger" onClick={onClick}>
            <div style={{ marginRight: "7px" }}>More Forecasts</div>
            {isActive === true ? (
              <FontAwesomeIcon icon={faCaretUp} size="xl" />
            ) : (
              <FontAwesomeIcon icon={faCaretDown} size="xl" />
            )}
          </button>
          <div
            ref={dropdownRef}
            className={`menu ${isActive ? "active" : "inactive"}`}
          >
            <div className="menu-container">
              <div className="menu-container-heading">Special Forecasts</div>
              <div className="menu-container-body">
                <a>Allergy Tracker</a>
                <a>Air Quality Forecast</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
