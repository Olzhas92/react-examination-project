import React from "react";
import Hero from "./Hero";
import classes from "../Movies/MoviesList.module.css";

const HeroesList = (props) => {
  return (
    <>
      <ul className={classes["movie-list"]}>
        {props.heroes.map((hero) => {
          return (
            <div key={hero.id}>
              <Hero hero={hero} />
            </div>
          );
        })}
      </ul>
    </>
  );
};

export default HeroesList;
