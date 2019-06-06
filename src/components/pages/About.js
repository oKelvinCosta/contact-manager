import React from "react";

export default function About(props) {
  // props.match.params.id
  // Pega o parâmetro ID
  return (
    <div>
      <h1 className="display-4">
        <span className="text-primary">About</span> Contact Manager{" "}
        {props.match.params.id}
      </h1>
      <p className="lead">Simple app to manage contacs</p>
      <p className="text-secondary">Version 1.0.0</p>
    </div>
  );
}
