import { useRef, useState } from "react";
import { Menu, MenuItem, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import classes from "./Login.module.css";

const Login = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [buttonName, setButtonName] = useState('Login');
  const divRef = useRef();

  function handleClick() {
    setAnchorEl(divRef.current);
  }
  function handleClose(buttonName) {
    setAnchorEl(null);
    setButtonName(buttonName);
  }

  return (
    <div className={classes.login}>
      <Button
        ref={divRef}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {buttonName}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={anchorEl}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MenuItem onClick={handleClose.bind(this, 'Login')}>
          <Link to="/login">Login</Link>
        </MenuItem>
        <MenuItem onClick={handleClose.bind(this, 'Register')}>
          <Link to="/register">Register</Link>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Login;
