import React, { useEffect, useState } from "react";
import classes from "./AddMovie.module.css";

const NewMovie = () => {
  const [myMovies, setMyMovies] = useState([]);
  const [myTitle, setMyTitle] = useState("");
  const [myText, setMyText] = useState("");
  const [myDate, setMyDate] = useState("");
  let movie = {};
  const submitHandler = (event) => {
    event.preventDefault();

    // could add validation here...

    movie = {
      title: myTitle,
      openingText: myText,
      releaseDate: myDate,
    };
    onAddMovie(movie);
    setMyMovies([...myMovies, movie]);
    console.log(movie);
    setMyTitle("");
    setMyText("");
    setMyDate("");
  };

  const onAddMovie = async (movie) => {
    const response = await fetch(
      "https://react-examination-project-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(movie),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    onAddMovie();
  }, []);

  return (
    <div>
      <div>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={myTitle}
              onChange={(e) => setMyTitle(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="opening-text">Opening Text</label>
            <textarea
              rows="5"
              id="opening-text"
              value={myText}
              onChange={(e) => setMyText(e.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="date">Release Date</label>
            <input
              type="text"
              id="date"
              value={myDate}
              onChange={(e) => setMyDate(e.target.value)}
            />
          </div>
          <button>Add Movie</button>
        </form>
      </div>
      <div>
        {myMovies.map((movie) => (
          <div className={classes.movie} key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.openingText}</p>
            <p>{movie.releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewMovie;
