import classes from "./Sidebar.module.css";
import { useEffect, useState } from "react";
import sideBarImg from "../../assets/imgs/freedom.jpg";
import axios from "axios";

const Sidebar = (props) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchCategories = async () => {
      const res = await axios.get("/category");
      setCategories(res.data);
    };
    fetchCategories();
    console.log(categories);
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img src={sideBarImg} alt="sidebar" />
      </div>
      <h1>About me</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adip</p>
      <h1>Categories</h1>
      <ul className={classes.categoryList}>
        {categories.map((category) => (
          <li>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
