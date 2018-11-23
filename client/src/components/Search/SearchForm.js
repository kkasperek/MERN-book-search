import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
});
const SearchForm = props => {
  return (
    <div>
      <form className={props.container} noValidate autoComplete="off">
        <TextField
          name="title"
          value={props.title}
          onChange={props.handleInputChange}
          id="outlined-search"
          label="Search for a book..."
          type="search"
          className={props.textField}
          margin="normal"
          variant="outlined"
        />
        <div>
          <Button variant="outlined" 
            onClick={props.handleFormSubmit}
            className={props.button}
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
export default withStyles(styles)(SearchForm);

// class searchBox extends Component {
//   state = {
//     name: "",
//     value: ""
//   };

//   render() {
//     const { classes } = this.props;

//     return (
//       <div>
//         <form className={classes.container} noValidate autoComplete="off">
//           <TextField
//             name="bookTitle"
//             value={this.state.title}
//             onChange={this.handleInputChange}
//             id="outlined-search"
//             label="Search for a book..."
//             type="search"
//             className={classes.textField}
//             margin="normal"
//             variant="outlined"
//           />
//           <div>
//             <Button variant="outlined" className={classes.button}>
//               Submit
//             </Button>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// searchBox.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(searchBox);
