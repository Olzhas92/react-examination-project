import React from "react";
import classes from "../Movies/Movie.module.css";

const Starship = (props) => {
  return (
    <>
      <p key={props.key} className={classes.movie}>
        <h2>{props.ship.name}</h2>
        The ship's name is {props.ship.name}. Its model is {props.ship.model}.
        The cargo capacity is {props.ship.cargo_capacity}. It was manufactured
        in {props.ship.created}. The manufacturer of this ships is{" "}
        {props.ship.manufacturer}. Its length is {props.ship.length}. Its crew
        is {props.ship.crew}, and the ship can carry {props.ship.passengers}{" "}
        passengers.
      </p>
    </>
  );
};

export default Starship;
