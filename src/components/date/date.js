import React from "react";
import moment from "moment";
import "./date.styles.scss";
function Date() {
  const date = moment().format("DD");
  const month = moment().format("MMMM");
  const year = moment().format("YYYY");
  return (
    <div className="d-flex flex-row align-items-center px-3 ">
      <div className="day">{date}</div>
      <div>
        <div className="month">{month}</div>
        <div className="year ">{year}</div>
      </div>
    </div>
  );
}

export default Date;
