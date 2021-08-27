import { useRef, useState } from "react";
import {
  Menu,
  MenuItem,
  Button,
  withStyles,
  ListItemText,
  ClickAwayListener
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

import classes from "./Login.module.css";
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: '#A7A7AE',
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Login = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [buttonName, setButtonName] = useState('Login');
  let history = useHistory()
  const divRef = useRef();

  function handleClick() {
    setAnchorEl(divRef.current);
  }
  function handleClose(buttonName) {
    setAnchorEl(null);
  }

  const loginClick = () => {
    handleClose('Login')
    setButtonName('Login')
    history.push('/login')
  }

  const registerClick = () => {
    handleClose('Register')
    setButtonName('Sign in')
    history.push('/register')
  }

  return (
    <div className={classes.login}>
      <div>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          classes={{root: classes.menuButton}}
          onClick={handleClick}
          ref={divRef}
        >
          {buttonName}
        </Button>
        <ClickAwayListener onClickAway={handleClose}>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem onClick={loginClick}>
              <ListItemText primary="Login" />
            </StyledMenuItem>
            <StyledMenuItem onClick={registerClick}>
              <ListItemText primary="Register" />
            </StyledMenuItem>
          </StyledMenu>
        </ClickAwayListener>
      </div>
    </div>
  );
};

export default Login;
