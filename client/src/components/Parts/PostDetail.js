import { useLocation } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import {Context} from '../../context/Context'
import axios from "axios";
import classes from "./PostDetail.module.css";
import testImg from "../../assets/imgs/relax.jpg";

const PostDetail = (props) => {
  //CONST AND STATES
  const location = useLocation();
  const {user} = useContext(Context);
  const id = location.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [error, setError] = useState('')
  const storePath = "http://localhost:5000/images/";
  const image = post.photo ? `${storePath}${post.photo}` : testImg;
  

  //FUNCTIONS

  const handleDelete = async () => {
    try{
      await axios.delete(`/post/${id}`, {username: user.username});
      window.location.replace('/')
    } catch(e){
      setError('Something went wrong!')
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("/post/" + id);
      setPost(res.data);
    };
    fetchPost();
  }, [id]);

  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img src={image} alt="test img" />
      </div>
      <div className={classes.mainInfo}>
        <h1>
          {post.title}
          <div>
            <span className={classes.icons}>
              <i class="edit far fa-edit"></i>
            </span>
            <span className={classes.icons} onClick={handleDelete}>
              <i class="fas fa-trash-alt"></i>
            </span>
          </div>
        </h1>
        <div className={classes.author}>
          <h3>Author: Danil Yusupov</h3>
          <h3>Posted 2 hour ago</h3>
        </div>
        <div className={classes.description}>
          <p>{post.desc}</p>
        </div>
      </div>
      {error && <h1>{error}</h1>}
    </div>
  );
};

export default PostDetail;
