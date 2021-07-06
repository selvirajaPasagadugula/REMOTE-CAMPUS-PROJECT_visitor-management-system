import React from "react";
import "./component_styles.css";

const StatCard = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.bgcolor,
      }}
      className="stats-card">
      <h3 style={{ paddingBottom: ".5rem" }}>{props.title}</h3>
      <p>
        <em>IN: </em>
        {props.countIn}
      </p>
      <p>
        <em>OUT: </em>
        {props.countOut}
      </p>
      <p>
        <em>SUSPICIOUS: </em>
        {props.countSuspicious}
      </p>
    </div>
  );
};

export default StatCard;
