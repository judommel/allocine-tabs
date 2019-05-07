import React from "react";
import axios from "axios";
import loading from "../img/loading.gif";
import MovieCard from "./MovieCards";

class Top extends React.Component {
  state = {
    isLoading: true,
    data: []
  };

  renderMovies = () => {
    let movies = this.state.data.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ));
    return movies;
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div className="loading-container">
          <img
            src={loading}
            alt="Loading Top Rates Movies"
            className="loading"
          />
        </div>
      );
    } else {
      return <div className="movie-list">{this.renderMovies()}</div>;
    }
  }

  async componentDidMount() {
    console.log("MOUNTED");

    await axios
      .get(
        "https://api-allocine.herokuapp.com/api/movies/top_rated?p=" +
          this.props.page
      )
      .then(response => {
        let moviedatas = response.data.results.map(movie => {
          return {
            title: movie.title,
            date: movie.release_date,
            poster_path:
              " https://image.tmdb.org/t/p/w370_and_h556_bestv2" +
              movie.poster_path,
            overview: movie.overview
          };
        });

        this.setState({
          data: moviedatas,
          isLoading: false
        });
      });
  }
}

export default Top;
