import React, { useEffect, useState } from "react";
import sanityClient from "./client.js";
import './App.css';

function App() {

  const [movies, setMovies] = useState([])

  useEffect(() => {
    sanityClient
    .fetch(
      `*[_type == "movie"]{
        title,
        slug,
        overview,
        releaseDate,
        popularity,
        poster,
        castMembers
    }`
    )
    .then((data) => console.log(data))
  }, [ ])
  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
