import { useHistory } from "react-router-dom";
import {
  CardMedia,
  Card,
  makeStyles,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import RelaxImg from "../../assets/imgs/relax.jpg";

// import classes from './PostCard.module.css'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginRight: 10,
    marginTop: 20,
  },
  media: {
    height: 140,
  },
});

const PostCard = (props) => {
  let history = useHistory();
  const classes = useStyles();
  const { title, description, id } = props;

  function handleClick() {
    history.push(`/posts`);
  }

  return (
    <Card className={classes.root} >
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image={RelaxImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary" onClick={handleClick}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
