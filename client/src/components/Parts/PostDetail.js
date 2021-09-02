import { useHistory, useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import EditPost from "./EditPost";
import { Paper, makeStyles } from "@material-ui/core";
import { Context } from "../../context/Context";
import axios from "axios";
import classes from "./PostDetail.module.css";
import defaultImg from "../../assets/imgs/relax.jpg";

const useStyles = makeStyles({
  paperEl: {
    padding: "20px",
  },
});

const PostDetail = () => {
  //CONST AND STATES
  const { user } = useContext(Context);
  const [edit, setEdit] = useState(false); // toggle edit mode
  const [post, setPost] = useState({});
  const [error, setError] = useState("");
  const location = useLocation();
  let history = useHistory(); // used for Router redirection
  const styles = useStyles();  
                    
  const id = location.pathname.split("/")[2]; // get id from url
  const storePath = "https://danya-react-blog.s3.eu-central-1.amazonaws.com/";
  const image = post.photo ? `${storePath}${post.photo}` : defaultImg;
  const canEdit = user && user._id === post.userId; // check if user owns post

  //FUNCTIONS

  const handleDelete = async () => {
    try {
      await axios.delete(`/post/${id}`, { data: { username: user.username } });
      history.push("/");
    } catch (e) {
      setError("Something went wrong!");
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/post/" + id);
      setPost(res.data);
    };
    fetchPost();
  }, [id, edit]);

  return (
    <div className={classes.wrapper}>
      {!edit && (
        <Paper elevation={3} className={styles.paperEl}>
          <div className={classes.imgContainer}>
            <img src={image} alt="test img" />
          </div>
          <div className={classes.mainInfo}>
            <h1>{post.title}</h1>
            {canEdit && (
              <div className="icons">
                <span className={classes.icons} onClick={(e) => setEdit(true)}>
                  <i class="edit far fa-edit"></i>
                </span>
                <span className={classes.icons} onClick={handleDelete}>
                  <i class="fas fa-trash-alt"></i>
                </span>
              </div>
            )}
            <div className={classes.author}>
              <h3>Author: {post.username}</h3>
              <h3>{new Date(post.createdAt).toDateString()}</h3>
            </div>
            <div className={classes.description}>
              <p>{post.desc}</p>
            </div>
          </div>
          {error && <h1>{error}</h1>}
        </Paper>
      )}
      {edit && <EditPost setEdit={setEdit} post={post} />}
    </div>
  );
};

export default PostDetail;
