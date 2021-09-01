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
import styles from "./PostCard.module.css";

//material ui styles
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minWidth: 300,
    marginTop: 20,
  },
  media: {
    height: 140,
  },
  title: {
    fontFamily: "Open Sans",
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: "-1px",
    textAlign: "left",
  },
  text: {
    fontFamily: "Open Sans",
    lineHeight: 1.5,
    overflow: "hidden"
  },
});

const PostCard = ({ post }) => {
  //CONSTS AND STATES
  const { title, desc, _id: id, photo } = post;
  const classes = useStyles();
  let history = useHistory();
  const image = photo ? `/upload/${photo}` : RelaxImg;

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
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.title}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={`${styles.desc} ${classes.text}`}
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={styles.postActions}>
        <Button size="small" color="primary" onClick={handleClick}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
