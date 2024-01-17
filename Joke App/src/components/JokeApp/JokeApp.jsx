import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./JokeApp.module.scss";

export const JokeApp = () => {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    
    getData();
  }, []); 

  const getData = async () => {
    const url = "https://official-joke-api.appspot.com/random_joke";
    try {
      const result = await axios.get(url);
      console.log(result.data.setup);
      console.log(result.data.punchline);
      setJoke(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewJokeClick = () => {
    getData();
  };

  return (
    <>
      <div className={style.joke}>
        <p key={`${joke.id}_type`} >Type of joke: {joke.type}</p>
        <p key={`${joke.id}_setup`}>{joke.setup}</p>
        <p key={`${joke.id}_punchline`}>{joke.punchline}</p>
      </div>

      {/* New Joke button */}
      <button className={style.newJoke} onClick={handleNewJokeClick}>
        new joke
      </button>
    </>
  );
};
