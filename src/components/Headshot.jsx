import React from "react";

export default function Headshot(props) {
  return (
    <div className="headshot">
      <img className="headshot-image" src={props.address} alt={props.name} />
      <h5>{props.name ? props.name : "Loading..."}</h5>
    </div>
  );
}
