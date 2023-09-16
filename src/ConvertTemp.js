import React, { useState } from "react";

export default function ConvertTemp(props) {
  let [unit, setUnit] = useState("celsius");
  function convertF(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertC(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{props.celsius}</span>
        <span className="temperature-unit ">
          °C |
          <a href="/" onClick={convertF}>
            °F
          </a>{" "}
        </span>
      </span>
    );
  } else {
    let fahrenheitT = Math.round(props.celsius * 1.8 + 32);
    return (
      <span className="fahrenhit">
        <span className="temperature">{fahrenheitT}</span>
        <span className="temperature-unit ">
          <a href="/" onClick={convertC}>
            °C
          </a>{" "}
          | °F
        </span>
      </span>
    );
  }
}
