import React from 'react';
import {useHistory} from "react-router-dom";

export default function MovieList(props) {
  if (props.movies) {
    return (
      <div className="movie-list">
        {props.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}
function MovieDetails(props) {

  let history = useHistory();
  
  function clickMovie(id){
    history.push(`/movies/${id}`)
  };

  const { id, title, director, metascore } = props.movie;

  return (
    <div  onClick={()=>clickMovie(id)} className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
