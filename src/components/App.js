import React from "react";
import Upcoming from "./Upcoming";
import Popular from "./Popular";
import Top from "./Top";
import Header from "./Header";

class App extends React.Component {
  state = {
    currentTab: "",
    page: 1,
    index: 0
  };

  nextPage = () => {
    if (this.state.currentTab !== "") {
      return (
        <i
          className="fas fa-arrow-right fa-3x"
          onClick={() => {
            this.setState({
              page: this.state.page + 1,
              index: this.state.index + 1
            });

            if (this.state.currentTab === "Popular") {
              return <Popular key={this.state.index} page={this.state.page} />;
            } else if (this.state.currentTab === "Upcoming") {
              return <Upcoming key={this.state.index} page={this.state.page} />;
            } else if (this.state.currentTab === "Top") {
              return <Top key={this.state.index} page={this.state.page} />;
            }
          }}
        />
      );
    }
  };

  toRender = () => {
    if (this.state.currentTab === "Popular") {
      return <Popular key={this.state.index} page={this.state.page} />;
    } else if (this.state.currentTab === "Upcoming") {
      return <Upcoming key={this.state.index} page={this.state.page} />;
    } else if (this.state.currentTab === "Top") {
      return <Top key={this.state.index} page={this.state.page} />;
    }
  };

  onTabClick = tab => {
    this.setState({
      currentTab: tab,
      index: this.state.index + 1,
      page: 1
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <ul>
            <li
              className={this.state.currentTab === "Popular" ? "current" : ""}
              onClick={() => {
                this.onTabClick("Popular");
              }}
            >
              Popular Movies
            </li>
            <li
              className={this.state.currentTab === "Upcoming" ? "current" : ""}
              onClick={() => {
                this.onTabClick("Upcoming");
              }}
            >
              Upcoming Movies
            </li>
            <li
              className={this.state.currentTab === "Top" ? "current" : ""}
              onClick={() => {
                this.onTabClick("Top");
              }}
            >
              Top Rated Movies
            </li>
          </ul>
          {this.nextPage()}
          <div>{this.toRender()}</div>
        </div>
      </div>
    );
  }
}

export default App;
