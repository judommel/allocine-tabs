import React from "react";

const MovieCard = props => {
  const { movie } = props;

  return (
    <div className="movie-card">
      <img
        src={movie.poster_path}
        className="movie-img"
        alt={movie.title + " poster"}
      />
      <div className="movie-info">
        <div className="movie-title">{movie.title}</div>
        <div>{movie.release_date}</div>
        <div className="movie-overview">{movie.overview}</div>
      </div>
    </div>
  );
};

export default MovieCard;
