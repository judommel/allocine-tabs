import React from "react";
import Upcoming from "./Upcoming";
import Popular from "./Popular";
import Top from "./Top";
import Header from "./Header";
import Welcome from "./Welcome";

class App extends React.Component {
  state = {
    currentTab: "Welcome",
    page: 1,
    index: 0,
    totalPages: null
  };

  nextPage = () => {
    if (this.state.currentTab !== "Welcome") {
      return (
        <div className="next-page">
          <span className="page-count">
            Page {this.state.page} sur {this.state.totalPages}
          </span>
          <i
            className="fas fa-arrow-right fa-2x"
            onClick={() => {
              this.setState({
                page: this.state.page + 1,
                index: this.state.index + 1
              });

              if (this.state.currentTab === "Popular") {
                return (
                  <Popular
                    key={this.state.index}
                    page={this.state.page}
                    totalPages={total => this.setState({ totalPages: total })}
                  />
                );
              } else if (this.state.currentTab === "Upcoming") {
                return (
                  <Upcoming
                    key={this.state.index}
                    page={this.state.page}
                    totalPages={total => this.setState({ totalPages: total })}
                  />
                );
              } else if (this.state.currentTab === "Top") {
                return (
                  <Top
                    key={this.state.index}
                    page={this.state.page}
                    totalPages={total => this.setState({ totalPages: total })}
                  />
                );
              }
            }}
          />
        </div>
      );
    }
  };

  toRender = () => {
    if (this.state.currentTab === "Welcome") {
      return <Welcome onSelectCategory={e => this.onTabClick(e)} />;
    } else if (this.state.currentTab === "Popular") {
      return (
        <Popular
          key={this.state.index}
          page={this.state.page}
          totalPages={total => this.setState({ totalPages: total })}
        />
      );
    } else if (this.state.currentTab === "Upcoming") {
      return (
        <Upcoming
          key={this.state.index}
          page={this.state.page}
          totalPages={total => this.setState({ totalPages: total })}
        />
      );
    } else if (this.state.currentTab === "Top") {
      return (
        <Top
          key={this.state.index}
          page={this.state.page}
          totalPages={total => this.setState({ totalPages: total })}
        />
      );
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
        <Header onTabClick={() => this.onTabClick("Welcome")} />
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
