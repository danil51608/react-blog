//IMPORT MODULES
import { useRef, useState } from "react";
import { useHistory } from "react-router-dom";

//IMPORT UI COMPONENTS
import {
  Menu,
  MenuItem,
  Button,
  withStyles,
  ListItemText,
  ClickAwayListener,
} from "@material-ui/core";

//IMPORT STYLES
import classes from "./Login.module.css";

//MENU STYLING
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #494E54",
    backgroundColor: '#1D3557',
    color: '#F1FAEE'
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

//StyledMenuItem STYLING
const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: "#72A1C0",
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Login = () => {
  //states
  const [anchorEl, setAnchorEl] = useState(null);
  const [buttonName, setButtonName] = useState("Login"); //change button name on toggle

  const butRef = useRef(); //used to set menu anchor
  let history = useHistory(); //used to navigate through Router

  function handleClick() {
    setAnchorEl(butRef.current); //open menu
  }
  function handleClose() {
    setAnchorEl(null); //close menu
  }

  const loginClick = () => {
    setButtonName("Login");
    history.push("/login"); //redirect to login page
  };

  const registerClick = () => {
    setButtonName("Sign in");
    history.push("/register"); //redirect to register page
  };

  return (
    <div className={classes.login}>
      <div>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          classes={{ root: classes.menuButton }}
          onClick={handleClick}
          ref={butRef}
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
