import Header from "../Parts/Header";
import Posts from "../Parts/Posts";

//STYLES
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Posts />
      </div>
    </>
  );
};

export default HomePage;
