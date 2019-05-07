import React from "react";
import axios from "axios";
import loading from "../img/loading.gif";

class Top extends React.Component {
  state = {
    isLoading: true,
    data: []
  };

  renderMovies = () => {
    let movies = this.state.data.map(movie => (
      <div className="movie-card">
        <img
          src={movie.img}
          className="movie-img"
          alt={movie.title + " poster"}
        />
        <div className="movie-info">
          <div className="movie-title">{movie.title}</div>
          <div>{movie.date}</div>
          <div className="movie-overview">{movie.overview}</div>
        </div>
      </div>
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
            img:
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
