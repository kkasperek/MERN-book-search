import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import API from "../utils/API";
import Container from "../components/container";
import NavBar from "../components/Navigation";
import Wrapper from "../components/Layout";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

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
            <Paper  elevation={1}>
              <Typography variant="h5" component="h3">
                Jump into a new adventure!
              </Typography>
              <Typography component="p">
                Save books to your bookshelf.
              </Typography>
              <h1 className="text-center">Find a Book!</h1>
   
            </Paper>
          </Container>
        </Wrapper>
      </div>
    );
  }
}

export default Search;
