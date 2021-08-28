import classes from "./Sidebar.module.css";
import { useEffect, useState } from "react";
import sideBarImg from "../../assets/imgs/bitard.jpeg";
import axios from "axios";

const Sidebar = (props) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/category");
      setCategories(res.data);
    };
    fetchCategories();
    
  }, []);

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
      {/* <h1>Categories</h1> */}
      {/* <ul className={classes.categoryList}>
        {categories.map((category) => (
          <li>{category.name}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Sidebar;
