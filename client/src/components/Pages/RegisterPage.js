import { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField, Button, Backdrop, CircularProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import classes from "./LoginPage.module.css";
import axios from "axios";

const RegisterPage = (props) => {
  let history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFetching, setIsFetching] = useState(false)
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password.trim().length < 8){
      return setError('Passwort must be at least 8 characters')
    }
    if(!email.includes('@')){
      return setError('Invalid email')
    }
    
    setError(false);
    setIsFetching(true)
    try {
      const res = await axios.post("/auth/register", {
        username,
        password,
        email,
      });
      res.data && history.push("/login");
      setIsFetching(false)
    } catch (error) {
      setIsFetching(false)
      if (error.response.data.customMessage) {
        setError(error.response.data.customMessage);
      }
    }
  };

  return (
    <div className={classes["login-body"]}>
      <form className={classes["login-form"]} onSubmit={(e) => handleSubmit(e)}>
        <h1>Registration</h1>
        <TextField
          classes={{ root: classes.textField }}
          id="outlined-basic"
          margin="normal"
          label="Username"
          // variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          classes={{ root: classes.textField }}
          id="outlined-basic"
          margin="normal"
          label="Email"
          // variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          classes={{ root: classes.textField }}
          id="outlined-basic"
          label="Password"
          margin="normal"
          type="password"
          // variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          classes={{ root: classes.submitButton }}
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
      <Backdrop open={isFetching} className={classes.backdrop}>
          <CircularProgress />
        </Backdrop>
    </div>
  );
};

export default RegisterPage;
