import React from "react";

export default function Error(props) {
  return (
    <div className="error">
      <strong>Oh no!</strong>
      <p className="text--light">{props.message}</p>
    </div>
  );
}
