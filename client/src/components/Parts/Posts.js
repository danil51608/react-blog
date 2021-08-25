import classes from "./Posts.module.css";
import PostCard from "./PostCard";
import {useEffect} from "react"

const Posts = (props) => {
  const {posts} = props;

  return (
    <div className={classes.container}>
      {posts.map((post,i) => <PostCard post={post} key={post._id}/>)}
    </div>
  );
};

export default Posts;
