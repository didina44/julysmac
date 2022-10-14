import React from "react";

function MenuItem({ image, name, descriere }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {descriere} </p>
    </div>
  );
}