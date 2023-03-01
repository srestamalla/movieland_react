import React, { useEffect } from "react";
import "./App.css";

// api key: 1dbb6316
const API_URL = "http://www.omdbapi.com?apikey=1dbb6316";

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);
  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
