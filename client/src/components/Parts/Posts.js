import classes from "./Posts.module.css";
import PostCard from "./PostCard";
import { Backdrop, CircularProgress } from "@material-ui/core";
import { useEffect, useContext } from "react";
import { Context } from "../../context/Context";

const Posts = (props) => {
  const { posts } = props;
  const { isFetching } = useContext(Context);
  useEffect(() => {}, [posts]);

  return (
    <div className={classes.container}>
      {posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
      <Backdrop open={isFetching} className={classes.backdrop}>
        <CircularProgress />
      </Backdrop>
    </div>
  );
};

export default Posts;
