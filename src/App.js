import React, { Component, useState } from "react";
import axios from "axios";
import YouTube from "react-youtube";
import "./App.css";
import Search from "./components/Search";
class App extends Component {
  render() {
    const API_URL = "https://api.themoviedb.org/3";
    const API_KEY = "cc4f9f949c0a24cc25b71fea042241cc";
    const IMAGE_PATH = "https://image.tmdb.org/t/p/original";
    const URL_IMAGE = "https://image.tmdb.org/t/p/original";

    //state variables

    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [trailer, setTrailer] = useState(null);
    const [searhMovie, setSearchMovie] = useState({ title: "Loading Movies" });
    const [playing, setPlaying] = useState(false);

    //get function for api requests
    const fetchMovies = async (searchKey) => {
      const type = searchKey ? "search" : "discover";
      const {
        data: { results },
      } = await axios.get(`${API_URL}/${type}/movie`, {
        params: {
          api_key: API_KEY,
          query: searchKey,
        },
      });

      setMovies(results);
      setMovies(results[0]);
    };

    return (
      <div className="App">
        <Search />
      </div>
    );
  }
}

export default App;
