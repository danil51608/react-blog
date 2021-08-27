import classes from "./Posts.module.css";
import PostCard from "./PostCard";
import {useEffect} from "react"

const Posts = (props) => {
  const {posts} = props;

  useEffect(() => {}, [posts])

  return (
    <div className={classes.container}>
      {posts.map(post => <PostCard post={post} key={post._id}/>)}
    </div>
  );
};

export default Posts;
