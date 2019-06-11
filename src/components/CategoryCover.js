import React from "react";
import axios from "axios";

class CategoryCover extends React.Component {
  state = {
    isLoading: true,
    data: null
  };

  render() {
    if (this.state.isLoading) {
      return <div className="category-cover-main">Loading...</div>;
    }

    return (
      <div className="category-cover-main" onClick={() => this.props.onClick()}>
        <img
          src={
            " https://image.tmdb.org/t/p/w370_and_h556_bestv2" +
            this.state.data.poster_path
          }
          alt="category-cover"
          className="category-cover-pic"
        />
        {this.props.categoryTitle}
      </div>
    );
  }

  componentDidMount() {
    axios
      .get(
        "https://api-allocine.herokuapp.com/api/movies/" + this.props.category
      )
      .then(response => {
        this.setState({
          data: response.data.results[1],
          isLoading: false
        });
      });
  }
}

export default CategoryCover;
