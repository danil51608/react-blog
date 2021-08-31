import { useState } from "react";

import { useHistory } from "react-router-dom";

import axios from "axios";

import { TextField, Button, Backdrop, CircularProgress, ThemeProvider } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

//STYLES
import {theme} from "../theme"
import classes from "./LoginPage.module.css";

const RegisterPage = () => {
  let history = useHistory(); // used for Router redirection
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false) // hide/show loader

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password.trim().length < 8){
      return setError('Passwort must be at least 8 characters')
    }
    if(!email.includes('@')){
      return setError('Invalid email')
    }
    
    setError(false); // clear previos errors
    setIsFetching(true) // show loader

    try {

      const res = await axios.post("/auth/register", {
        username,
        password,
        email,
      });

      res.data && history.push("/login");

      setIsFetching(false) //hide loader
    } 
    catch (error) {
      setIsFetching(false) //hide loader

      // check for custom server message
      if (error.response.data.customMessage) {
        setError(error.response.data.customMessage);
      }
    }
  };

  return (
    <div className={classes["login-body"]}>
     <ThemeProvider theme={theme}>
        <form className={classes["login-form"]} onSubmit={(e) => handleSubmit(e)}>
          <h1>Registration</h1>
          <TextField
            classes={{ root: classes.textField }}
            id="outlined-basic"
            margin="normal"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            margin="normal"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            margin="normal"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
          {error && (
            <Alert severity="error">
              <strong>{error}</strong>
            </Alert>
          )}
        </form>
        <Backdrop open={isFetching}>
            <CircularProgress />
          </Backdrop>
     </ThemeProvider>
    </div>
  );
};

export default RegisterPage;
