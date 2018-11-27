import React from "react";
import BookCard from "./Card";
import "./searchresults.css";

const SearchResults = props => {
  // loopObjects = () =>{
  //   Object.keys(this.synopsis).forEach((key) => {
  //     let sKey = this.synopsis[key];
  //     let iKey = this.image[key];
  //     console.log(sKey, iKey);
  //   }) 
  // }
  return (
    <div className="search-results">
      {props.books.map((book, i) => (
      
        <BookCard {...props}
          id={book._id}
          key={i}
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          description={book.volumeInfo.description}
          
          // description={ book.searchInfo.textSnippet}
          //image={book.volumeInfo.imageLinks.thumbnail}
          link={book.infoLink}
        >
          <button {...props} name="savebtn" onClick={props.handleSaveBook}>
            Add
          </button>
          <button name="viewbtn">
            <span href={props.link}>View</span>
          </button>
        </BookCard>
      ))}
    </div>
  );
};
export default SearchResults;
