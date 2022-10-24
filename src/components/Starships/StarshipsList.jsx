import React from "react";
import Startship from "./Starship";
import classes from "../Movies/MoviesList.module.css";

const StarshipsList = (props) => {
  return (
    <>
      <ul className={classes["movies-list"]}>
        {props.ships.map((ship) => {
          return (
            <div key={ship.id}>
              <Startship ship={ship} key={ship.id} />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default StarshipsList;
