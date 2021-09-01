import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import axios from 'axios';

import { CircularProgress } from "@material-ui/core";
import classes from "./Posts.module.css";

const Posts = () => {

  const [posts, setPosts] = useState([])
    const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    const fetchPosts = async()=>{
      setIsFetching(true)
      const res = await axios.get('/post')
      setPosts(res.data)
      setIsFetching(false)
    }
    fetchPosts()


  }, [])
  
  return (
    <div className={classes.container}>
      {posts.map((post) => (
        <PostCard post={post} key={post._id} className={classes.post}/>
      ))}
      {isFetching && <CircularProgress color="primary" className={classes.loader} />}
    </div>
  );
};

export default Posts;
