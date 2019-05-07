import React from "react";
import axios from "axios";

class Popular extends React.Component {
  state = {
    isLoading: true,
    data: [],
    page: 0
  };

  renderMovies = () => {
    let moviePage = [...this.state.data[this.state.page]];

    console.log(this.state.data[this.state.page]);

    let movies = moviePage.map((movie, index) => (
      <div className="movie-card" key={index}>
        <div>
          {" "}
          <img src={movie.img} className="movie-img" />
        </div>
        <div className="movie-info">
          <div className="movie-title">{movie.title}</div>
          <div>{movie.date}</div>
          <div className="movie-overview">{movie.overview}</div>
        </div>
      </div>
    ));

    console.log(movies);

    // return movies;
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <img src="../img/loading.gif" alt="Loading Popular Movies" />
        </div>
      );
    } else {
      return (
        <div>
          <i
            className="fas fa-arrow-right fa-3x"
            onClick={() => this.setState({ page: this.state.page + 1 })}
          />
          <div className="movie-list">{this.renderMovies()}</div>
        </div>
      );
    }
  }

  async componentDidMount() {
    const response = await axios
      .get(
        "https://api-allocine.herokuapp.com/api/movies/popular?p="
        //  +
        //   this.state.page
      )
      .then(async response => {
        for (let i = 1; i <= response.data.total_pages; i++) {
          const response = await axios
            .get(
              "https://api-allocine.herokuapp.com/api/movies/popular?p=" + i
              //  +
              //   this.state.page
            )
            .then(response => {
              console.log("MOUNTED");

              let moviedatas = response.data.results.map((movie, index) => {
                return {
                  key: index,
                  title: movie.title,
                  date: movie.release_date,
                  img:
                    " https://image.tmdb.org/t/p/w370_and_h556_bestv2" +
                    movie.poster_path,
                  overview: movie.overview
                };
              });

              this.setState({
                data: [...this.state.data, [moviedatas]],
                isLoading: false
              });
            });
        }
      });
  }
}

export default Popular;
