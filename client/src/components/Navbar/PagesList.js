// IMPORT MODULES
import { useContext } from "react";
import { Link } from "react-router-dom";

//IMPORT REQUIREMENTS
import { Context } from "../../context/Context";

//IMPORT STYLE
import classes from "./PagesList.module.css";

const PagesList = () => {
  //import user from context
  const { user } = useContext(Context);
  return (
    <ul className={classes["list-body"]}>
      <li>
        <Link to="/">HOME</Link>
      </li>
      <li>
        <Link to="/aboutme">ABOUT</Link>
      </li>
      <li>CONTACT</li>
      {user && (
        <li>
          <Link to="/create">WRITE</Link>
        </li>
      )}
    </ul>
  );
};

export default PagesList;
