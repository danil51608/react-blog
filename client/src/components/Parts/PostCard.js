import { useHistory } from "react-router-dom";
import {
  CardMedia,
  Card,
  makeStyles,
  CardActionArea,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import RelaxImg from "../../assets/imgs/relax.jpg";
import styles from './PostCard.module.css'

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
  const classes = useStyles();
  let history = useHistory();
  const { title, desc, _id:id, photo } = post;
  const storagePath = 'https://danya-first-blog.herokuapp.com/images/'
  const image = photo ? `${storagePath}${photo}` : RelaxImg
  
  //FUNCTIONS
  function handleClick() {
    history.push(`/posts/${id}`);
  }

  return (
    <Card className={`${classes.root} ${styles.postCard}`}>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          className={`${classes.media} ${styles.postMedia}`}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent className={styles.info}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={styles.desc}>
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.postActions}>
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
