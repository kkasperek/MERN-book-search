import React from "react";
import "./SearchForm.css";

// Search Form
const SearchForm = props => (
  <form className="search">
    <div className="form-group">
      <label htmlFor="title">Look up a book</label>
      <input
        value={props.search}
        onChange={props.handleInputChange}
        name="book"
        list="books"
        type="text"
        className="form-control"
        placeholder="Type in a title of a book..."
        id="book"
      />
      <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button>
    </div>
  </form>
);

export default SearchForm;
