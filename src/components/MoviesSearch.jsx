import React from "react";
import { useState } from "react";
const url =
  "https://api.themoviedb.org/3/movie/550?api_key=cc4f9f949c0a24cc25b71fea042241cc";

const MoviesSearch = () => {
  const view = () => {
    fetch(url)
      .then((e) => e.json())
      .then((data) => console.log(data));
  };

  const [value, inputValue] = useState("change");

  const cambio = (e) => {
    inputValue("tu mama");
  };

  return (
    <div>
      asd
      <h2>{value}</h2>
      <button onClick={cambio}>aaaaaaaaaaaaaa</button>
    </div>
  );
};

export default MoviesSearch;
