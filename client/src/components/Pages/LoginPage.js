import { useContext, useRef } from "react";
import { Context } from "../../context/Context";
import { TextField, Button } from "@material-ui/core";
import classes from "./LoginPage.module.css";
import axios from "axios";

const LoginPage = (props) => {
  const { user, isFetching, dispatch, error } = useContext(Context);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(user);
  return (
    <div className={classes["login-body"]}>
      <form className={classes["login-form"]} onSubmit={(e) => handleSubmit(e)}>
        <TextField
          classes={{ root: classes.textField }}
          id="outlined-basic"
          margin="normal"
          label="username"
          variant="outlined"
          inputProps={{ ref: usernameRef }}
        />
        <TextField
          classes={{ root: classes.textField }}
          id="outlined-basic"
          label="Password"
          margin="normal"
          variant="outlined"
          inputProps={{ ref: passwordRef }}
        />
        <Button
          classes={{ root: classes.submitButton }}
          variant="contained"
          color="primary"
          type="submit"
          disabled={isFetching}
        >
          Login
        </Button>
        {isFetching && <span>Loading ...</span>}
        {error && <span>Something went wrong!</span>}
      </form>
    </div>
  );
};

export default LoginPage;
