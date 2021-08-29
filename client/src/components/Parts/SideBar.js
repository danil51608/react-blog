import classes from "./Sidebar.module.css";
import sideBarImg from "../../assets/imgs/bitard.jpeg";

const Sidebar = () => {
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img src={sideBarImg} alt="sidebar" />
      </div>
      <h1>About me</h1>
      <p>
        Hi!:{")"} My name is Danya and I'm glad you've visited my blog. This
        blog was written by me using React, Node.JS and CSS. Try to log in and
        write a post {";)."} Don't worry about your password. Your password will
        be securely hashed.
      </p>
    </div>
  );
};

export default Sidebar;
