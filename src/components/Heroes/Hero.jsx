import React from "react";
import classes from "../Movies/Movie.module.css";

const Hero = (props) => {
  return (
    <>
      <p className={classes.movie}>
        <h2>{props.hero.name}</h2>
        The hero's name is {props.hero.name}. The hero was born{" "}
        {props.hero.birth_year}. The hero's eye-color is {props.hero.eye_color},
        and hair is {props.hero.hair_color}.
      </p>
    </>
  );
};

export default Hero;
