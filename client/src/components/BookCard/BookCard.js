import React from "react";

const BookCard = props => (
//   <ul className="list-group search-results">
//     {props.results.map(result => (
//       <li book={result} className="list-group-item">
//         <strong>Title:</strong>
//         <span>{result}</span>
//       </li>
//     ))}
//   </ul>
     <div className="card">
        <div className="img-container">
          <img alt={props.title} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Title:</strong>
              <span >{props.title}</span>
            </li>
            <li>
              <strong>Authors:</strong>
              <span>{props.authors}</span>
            </li>
            <li>
              <strong>Description:</strong>
              <span>{props.description}</span>
            </li>
          </ul>
          {props.link}
        </div>
      </div>
);

export default BookCard;
