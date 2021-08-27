import defaultImage from "../../assets/imgs/robo.jpg";
import { useRef, useState, useEffect, useContext } from "react";
import {useHistory} from "react-router-dom";
import {Context} from '../../context/Context'
import {
  Menu,
  MenuItem,
  Button,
  withStyles,
  ListItemText,
} from "@material-ui/core";
import classes from "./Profile.module.css";

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

const Profile = () => {
  let history = useHistory()
  const {dispatch, user} = useContext(Context)
  const [anchorEl, setAnchorEl] = useState(null);
  const divRef = useRef();

  const imgPath = user.profilePic ? `http://localhost:5000/images/${user.profilePic}` : defaultImage

  function handleClick(e) {
    e.stopPropagation();
    setAnchorEl(divRef.current);
  }
  function handleClose() {
    setAnchorEl(null);
  }

  const settingsClick = () => {
    history.push('/settings')
  }

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT'})
    history.push('/')
  }

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
      <div>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          classes={{root: classes.menuButton}}
          onClick={handleClick}
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
    </div>
  );
};

export default Profile;
