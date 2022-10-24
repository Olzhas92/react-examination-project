import React, { useState, useEffect, useCallback } from "react";
import HeroesList from "../components/Heroes/HeroesList";

const Heroes = () => {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchHeroesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/people");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setHeroes(data.results);
      console.log(data.results);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchHeroesHandler();
  }, [fetchHeroesHandler]);

  return (
    <>
      <section>
        <button onClick={fetchHeroesHandler}>Fetch Heroes</button>
      </section>
      <section>
        {!isLoading && heroes.length > 0 && <HeroesList heroes={heroes} />}
        {!isLoading && heroes.length === 0 && !error && <p>Found no heroes</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </>
  );
};

export default Heroes;
