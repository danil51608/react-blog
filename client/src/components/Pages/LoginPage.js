import { useContext, useRef, useState } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

import {
  TextField,
  Button,
  Backdrop,
  CircularProgress,
  ThemeProvider,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

import { Context } from "../../context/Context";

//STYLES
import { theme } from "../theme";
import classes from "./LoginPage.module.css";

const LoginPage = () => {
  const { dispatch } = useContext(Context);
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false); // hide/show loader
  const usernameRef = useRef();
  const passwordRef = useRef();
  let history = useHistory(); // used for Router redirection

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(false); // clear previos errors
    setIsFetching(true); // show loader

    try {
      const res = await axios.post("/auth/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      });

      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      setIsFetching(false); //hide loader
      history.push("/");
    } catch (err) {
      setIsFetching(false); //hide loader
      if (err.response.data.customMessage) {
        setError(err.response.data.customMessage);
      }
    }
  };

  return (
    <div className={classes["login-body"]}>
      <ThemeProvider theme={theme}>
        <form
          className={classes["login-form"]}
          onSubmit={(e) => handleSubmit(e)}
        >
          <h1>Login</h1>
          <TextField
            classes={{ root: classes.textField }}
            id="outlined-basic"
            margin="normal"
            label="username"
            inputProps={{ ref: usernameRef }}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            margin="normal"
            type="password"
            inputProps={{ ref: passwordRef }}
          />
          <Button
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
      </ThemeProvider>
    </div>
  );
};

export default LoginPage;
