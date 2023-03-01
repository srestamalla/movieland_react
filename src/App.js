import React, { useState, useEffect } from "react";
import "./App.css";
import { MovieCards } from "./components/MovieCards";
import SearchIcon from "./search.svg";

// api key: 1dbb6316
const API_URL = "http://www.omdbapi.com?apikey=1dbb6316";

// const movie1 = {
//   Title: "The Amazing Spiderman 2 Webb Cut",
//   Year: "2021",
//   imdbID: "tt18351128",
//   Type: "movie",
//   Poster:
//     "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg",
// };

function App() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Sreach for movies"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(search)}
        />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movies) => (
            <MovieCards movie={movies} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
