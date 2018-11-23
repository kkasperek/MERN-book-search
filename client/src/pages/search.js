import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import API from "../utils/API";
import Container from "../components/container";
import SearchForm from "../components/SearchForm";
import NavBar from "../components/Navigation";
import Wrapper from "../components/Layout";
import SearchBox from "../components/searchBox";



class Search extends Component {
  state = {
    search: "",
    books: [],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available books
  //   componentDidMount(res) {
  //     console.log(res.data)
  //   }

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.searchBooks(this.state.search)
      .then(res => {
        this.setState({ results: res.data.message });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          <Container style={{ minHeight: "80%" }}>
            <h1 className="text-center">Find a Book!</h1>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </Container>
          <SearchBox />
        </Wrapper>
      </div>
    );
  }
}

export default Search;
