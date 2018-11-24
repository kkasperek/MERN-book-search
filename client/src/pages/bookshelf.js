import React, { Component } from "react";
import API from "../utils/API";
import Button from "@material-ui/core/Button";
import Container from "../components/Layout/container";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Navigation/footer";
import Wrapper from "../components/Layout/wrapper";
import BookshelfCard from "../components/BookshelfCard/Card";
import DeleteBtn from "../components/Buttons/delete-button";

class Bookshelf extends Component {
  state = {
    id:"",
    title: "",
    books: [],
    authors: [],
    description: "",
    image: "",
    link: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        console.log(res.data);
        this.setState({
          books: res.data
        });
      })
      .catch(err => console.log(err));
  };
  deleteBook = () => {
    API.deleteBook(this.state.id)
      .then(res => {
        console.log(res.id);
        this.loadBooks();
        alert("Book has been removed!");
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          <h1>The Bookshelf</h1>

          <Button variant="contained" color="primary" href="/search">
            Click to go to other page ...
          </Button>

          <Container>
            {this.state.books.map(book => (
              <BookshelfCard
                id={book._id}
                key={book._id}
                title={book.title}
                authors={book.authors}
                description={book.description}
                image={book.image}
                link={book.link}
              />
            ))}
            <DeleteBtn onClick={this.deleteBook()} />
          </Container>

          <Container />
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default Bookshelf;
