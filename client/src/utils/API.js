import axios from "axios";
import APIKEY from "../config/keys";
const URL = "https://www.googleapis.com/books/v1/volumes?q=";

// Export an object containing methods use for accessing googlebooks API
export default {
  // Search for books
  searchBooks: (query) => {
    //console.log(query);
    return axios.get(URL + query + APIKEY);
  },
   // Saves a book to the database
  saveBook: function(bookData) {
    console.log(bookData);
    return axios.post("/api/books", bookData);
  },
  // Gets all saved books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  } 
};
