import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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

class searchBox extends Component {
  state = {
    name: ""
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root} elevation={1}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
          Paper can be used to build surface or other elements for your
          application.
        </Typography>

        <form className={classes.container} noValidate autoComplete="off">
          <TextField
            id="outlined-search"
            label="Search for a book..."
            type="search"
            className={classes.textField}
            margin="normal"
            variant="outlined"
          />
          <div>
            <Button variant="outlined" className={classes.button}>
              Submit
            </Button>
          </div>
        </form>
      </Paper>
    );
  }
}

searchBox.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(searchBox);
