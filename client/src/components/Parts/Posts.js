import classes from "./Posts.module.css";
import PostCard from "./PostCard";

const dummy_post = [
  {
    title: "Lizard",
    description: `Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica`,
  },
  {
    title: "Lizard",
    description: `Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica`,
  },
  {
    title: "Lizard",
    description: `Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica`,
  },
  {
    title: "Lizard",
    description: `Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica`,
  },
  {
    title: "Lizard",
    description: `Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica`,
  },
  {
    title: "Lizard",
    description: `Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica`,
  },
  {
    title: "Lizard",
    description: `Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica`,
  },
  {
    title: "Lizard",
    description: `Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica`,
  },
  {
    title: "Lizard",
    description: `Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
    across all continents except Antarctica`,
  },
];

const Posts = (props) => {
  return (
    <div className={classes.container}>
      {dummy_post.map((post,i) => <PostCard title={post.title} description={post.description} id={i} key={i}/>)}
    </div>
  );
};

export default Posts;
