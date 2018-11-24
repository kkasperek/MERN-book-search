import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    objectFit: 'cover',
  },
};

const BookshelfCard = props => {
  const { classes } = props;
 
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.title}
          className={classes.media}
          height="200"
          image= {props.image || "https://via.placeholder.com/200"} 
          src ={props.link}
          title={props.title}
        />

        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
             {props.title} | {props.authors}
          </Typography>
          <Typography component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary">
          <span href={props.link}>View</span> 
        </Button>
      </CardActions>
    </Card>
  );
}

BookshelfCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookshelfCard);