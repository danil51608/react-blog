import profileImg from "../../assets/imgs/profile.jpeg";
import { useRef, useState, useEffect } from "react";
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
      backgroundColor: '#ccc',
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const Profile = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const divRef = useRef();

  function handleClick(e) {
    e.stopPropagation();
    setAnchorEl(divRef.current);
  }
  function handleClose() {
    setAnchorEl(null);
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
      <div className={classes["img-container"]}>
        <img src={profileImg} alt="profile" />
      </div>
      <div>
        <Button
          aria-controls="customized-menu"
          aria-haspopup="true"
          variant="contained"
          color="#ccc"
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
          <StyledMenuItem>
            <ListItemText primary="Sent mail" />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemText primary="Drafts" />
          </StyledMenuItem>
        </StyledMenu>
      </div>
    </div>
  );
};

export default Profile;
