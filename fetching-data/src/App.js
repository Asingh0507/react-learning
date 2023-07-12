import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
   
  const fetchMoviesHandler = () => {
    fetch(`https://swapi.dev/api/films`).then( res => res.json()).then((data) => {
      console.log(data);
      const transformedData = data.results.map((curr)=>{
        return {
          id: curr.episode_id,
          title: curr.title,
          openingText: curr.opening_crawl,
          releaseDate: curr.release_date

        }
      })
      setMovies(transformedData);
    })
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
