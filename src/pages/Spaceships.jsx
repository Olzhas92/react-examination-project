import React, { useState, useEffect, useCallback } from "react";
import StarshipsList from "../components/Starships/StarshipsList";

const Spaceships = () => {
  const [ships, setShips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchShipsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/starships");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setShips(data.results);
      console.log(data.results);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchShipsHandler();
  }, [fetchShipsHandler]);

  return (
    <>
      <section>
        <button onClick={fetchShipsHandler}>Fetch Heroes</button>
      </section>
      <section>
        {!isLoading && ships.length > 0 && <StarshipsList ships={ships} />}
        {!isLoading && ships.length === 0 && !error && <p>Found no heroes</p>}
        {isLoading && <p>Loading...</p>}
        {!isLoading && error && <p>{error}</p>}
      </section>
    </>
  );
};

export default Spaceships;
