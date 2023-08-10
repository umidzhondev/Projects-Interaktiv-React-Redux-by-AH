import logo from "./logo.svg";
import "./App.css";
import Cards from "./components/Cards";
import SearchBar from "./components/SearchBar";
import React, { Component } from "react";
import { foods } from "./foods";

class App extends Component {
  state = {
    foods: [],
    searchedFoods: "",
  };

  componentDidMount() {
    this.setState({ foods: foods });
  }

  onSearch = (event) => {
    this.setState({ searchedFoods: event.target.value });
  };

  render() {
    const filtred = this.state.foods.filter((food) => {
      return food.name
        .toLowerCase()
        .includes(this.state.searchedFoods.toLowerCase());
    });
    return (
      <div className="App">
        <div className="wrapper text-center">
          <h1 className="my-3">Taomlar</h1>
          <SearchBar onSearch={this.onSearch} />
          <Cards foods={filtred} />
        </div>
      </div>
    );
  }
}

export default App;
