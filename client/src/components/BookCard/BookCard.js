import React from "react";
import "./card.css";
// import { withStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

const BookCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.title} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Title:</strong>
          <span>{props.title}</span>
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
