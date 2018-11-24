import React from "react";
import Button from "@material-ui/core/Button";

//adds book to bookshelf (db)
const AddBtn = props => (
<Button>
     <span className="add-btn" {...props}>
    Add to bookshelf
  </span>
</Button>
 
);

export default AddBtn;
