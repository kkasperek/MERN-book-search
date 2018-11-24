import React, { Component } from "react";
import API from "../utils/API";
import "./pages.css";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import NavBar from "../components/Navigation/NavBar";
import Footer from "../components/Navigation/footer";
import Wrapper from "../components/Layout/wrapper";
import Container from "../components/Layout/container";
import BookCard from "../components/BookCard";
import BookshelfCard from "../components/BookshelfCard/Card";
import SearchForm from "../components/Search/SearchForm";
import AddBtn from "../components/Buttons/add-button";
import ViewBtn from "../components/Buttons/view-button";

// setting components initial state
class Home extends Component {
  state = {
    title: "",
    books: [],
    authors: [],
    description: "",
    image: "",
    link: ""
  };
  componentDidMount() {}
  // Get  value and name of input which triggered change
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  // Handle event when form is submitted
  handleFormSubmit = event => {
    event.preventDefault();

    API.searchBooks(this.state.title)
      .then(res => {
        let books = res.data.items;
        console.log(books);

        //loop through array of book objects
        books.forEach(book => {
          let title = book.volumeInfo.title;
          let authors = book.volumeInfo.authors;
          let description = book.volumeInfo.description;
          let image = book.volumeInfo.imageLinks.thumbnail;
          let link = book.selfLink;

          // log to the console -----------
          console.log(`
          ${title}
          ${authors}
          ${image}
          ${link}
          ${description}
          `);

          this.setState({
            books: books,
            title: title,
            authors: authors,
            description: description,
            image: image,
            link: link
          });
        });
      })
      .catch(err => console.log(err));

    this.setState({
      title: "",
      books: [],
      authors: [],
      description: "",
      image: "",
      link: ""
    });
  };
  handleOnClick = event => {
    event.preventDefault();
    API.saveBook({
      title: this.state.title,
      authors: this.state.authors,
      description: this.state.description,
      image: this.state.image,
      link: this.state.link
    })
      .then(res => alert("Book has been added to your bookshelf!"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          <h1>Search For A New Book!</h1>
          <Container>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              title={this.state.title}
            />
          </Container>

          <div>
            <h3>{this.state.title}</h3>
          </div>

          <Container>
            <Paper id="searchResults" className={this.root} elevation={1}>
              <Typography variant="h5" component="h3">
                Results:
              </Typography>

              <Container>
                <BookshelfCard
                  id={this.state.books.id}
                  key={this.state.books.id}
                  title={this.state.title}
                  authors={this.state.authors}
                  description={this.state.description}
                  image={this.state.image}
                  link={this.state.link}
                />
            
                <AddBtn onClick={this.handleOnClick} />
              </Container>

              <Container>
                <BookCard
                  id={this.state.books.id}
                  key={this.state.books.id}
                  title={this.state.title}
                  authors={this.state.authors}
                  description={this.state.description}
                  image={this.state.image}
                  link={this.state.link}
                />
              </Container>

              {/* Link Buttons */}
              <span>
                <Button>
                  <AddBtn onClick={this.handleOnClick} />
                </Button>
                <Button>
                  <ViewBtn href={this.props.link} />
                </Button>
              </span>
            </Paper>
          </Container>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}
export default Home;
