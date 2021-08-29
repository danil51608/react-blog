import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../context/Context";
import {
  TextField,
  Button,
  Backdrop,
  CircularProgress,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import classes from "./LoginPage.module.css";
import axios from "axios";

const LoginPage = () => {
  let history = useHistory();
  const [error, setError] = useState("");
  const { isFetching, dispatch } = useContext(Context);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      history.push("/");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
      if (err.response.data.customMessage) {
        setError(err.response.data.customMessage);
      }
    }
  };

  return (
    <div className={classes["login-body"]}>
      <form className={classes["login-form"]} onSubmit={(e) => handleSubmit(e)}>
        <h1>Login</h1>
        <TextField
          classes={{ root: classes.textField }}
          id="outlined-basic"
          margin="normal"
          label="username"
          // variant="outlined"
          inputProps={{ ref: usernameRef }}
        />
        <TextField
          classes={{ root: classes.textField }}
          id="outlined-basic"
          label="Password"
          margin="normal"
          // variant="outlined"
          type="password"
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
        {error && (
          <Alert severity="error">
            <strong>{error}</strong>
          </Alert>
        )}
      </form>
        <Backdrop open={isFetching} className={classes.backdrop}>
          <CircularProgress />
        </Backdrop>
    </div>
  );
};

export default LoginPage;
