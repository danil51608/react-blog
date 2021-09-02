//IMPORT MODULES
import { useRef, useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

//IMPORT UI COMPONENTS
import {
  Menu,
  MenuItem,
  Button,
  withStyles,
  ListItemText,
  ThemeProvider,
} from "@material-ui/core";

//IMPORT REQUIREMENTS
import { Context } from "../../context/Context";

//IMPORT STYLE
import classes from "./Profile.module.css";
import { theme } from "../theme";

//IMPORT IMAGE PRE-SET
import defaultImage from "../../assets/imgs/robo.jpg";

//StyledMenu STYLING
const StyledMenu = withStyles({
  paper: {
    border: "1px solid #494E54",
    backgroundColor: "#1D3557",
    color: "#F1FAEE",
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

const Profile = () => {
  let history = useHistory();
  const { dispatch, user } = useContext(Context);
  const [anchorEl, setAnchorEl] = useState(null);
  const divRef = useRef();

  const imgPath = user.profilePic ? `https://danya-react-blog.s3.eu-central-1.amazonaws.com/${user.profilePic}` : defaultImage;

  function handleClick(e) {
    e.stopPropagation();
    setAnchorEl(divRef.current);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  const settingsClick = () => {
    history.push("/settings");
  };

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/");
  };

  useEffect(() => {
    const listener = (e) => {
      setAnchorEl(null);
    };
    document.addEventListener("click", listener);
    return () => {
      document.removeEventListener("click", listener);
    };
  }, []);

  return (
    <div className={classes.container}>
      <span className={classes.username}>{user.username}</span>
      <div className={classes["img-container"]}>
        <img src={imgPath} alt="profile" />
      </div>
      <ThemeProvider theme={theme}>
        <div>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="primary"
            variant="contained"
            ref={divRef}
          >
            Menu
          </Button>
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem onClick={settingsClick}>
              <ListItemText primary="Settings" />
            </StyledMenuItem>
            <StyledMenuItem onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </StyledMenuItem>
          </StyledMenu>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Profile;
