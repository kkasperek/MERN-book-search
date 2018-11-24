import React, { Component } from "react";
import API from "../../utils/API";
import Button from "@material-ui/core/Button";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
    <Button>
  <span className="delete-btn" {...props}>
    ✗ Remove
  </span>
  </Button>
);
export default DeleteBtn;

// class DeleteBtn extends Component {
//   state = {
//     books: []
//   };

//   deleteBook = id => {
//     API.deleteBook(id)
//       .then(res => this.loadBooks())
//       .catch(err => console.log(err));
//   };

//   render() {
//     return (
//       <Button>
//         <span className="delete-btn" onClick={() => this.deleteBook(book._id)}>
//           ✗
//         </span>
//       </Button>
//     );
//   }
// }
// export default DeleteBtn;
