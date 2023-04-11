import React from "react";
import "./App.css";
import robots from "./robots";
import Cards from "./Cards";
import SearchBox from "./SearchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="App">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Cards robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
