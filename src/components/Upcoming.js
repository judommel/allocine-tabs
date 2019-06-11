import React from "react";
import axios from "axios";
import loading from "../img/loading.gif";
import MovieCard from "./MovieCards";

class Upcoming extends React.Component {
  state = {
    isLoading: true,
    data: [],
    totalPages: null
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
            alt="Loading Upcoming Movies"
            className="loading"
          />
        </div>
      );
    } else {
      return <div className="movie-list">{this.renderMovies()}</div>;
    }
  }

  async componentDidMount() {
    await axios
      .get(
        "https://api-allocine.herokuapp.com/api/movies/upcoming?p=" +
          this.props.page
      )
      .then(response => {
        console.log("MOUNTED");

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
          isLoading: false,
          totalPages: response.data.total_pages
        });
        this.props.totalPages(this.state.totalPages);
      });
  }
}

export default Upcoming;
