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

//material ui styles 
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 300,
    marginRight: 10,
    marginTop: 20,
  },
  media: {
    height: 140,
  },
});

const PostCard = ({post}) => {
  //CONSTS AND STATES
  let history = useHistory();
  const classes = useStyles();
  const { title, description, _id:id, photo } = post;
  const storagePath = 'http://localhost:5000/images/'
  const image = photo ? `${storagePath}${photo}` : RelaxImg
  
  //FUNCTIONS
  function handleClick() {
    history.push(`/posts/${id}`);
  }

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={classes.media}
          image={image}
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
