import { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import classes from "./LoginPage.module.css";
import axios from "axios";

const RegisterPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false)
    try {
      const res = await axios.post("/auth/register", {
        username,
        password,
        email,
      });
      res.data && window.location.replace("/login");
    } catch (e) {
      setError(true);
    }
  };

  return (
    <div className={classes["login-body"]}>
      <form className={classes["login-form"]} onSubmit={(e) => handleSubmit(e)}>
        <TextField
          classes={{ root: classes.textField }}
          id="outlined-basic"
          margin="normal"
          label="Username"
          variant="outlined"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          classes={{ root: classes.textField }}
          id="outlined-basic"
          margin="normal"
          label="Email"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          classes={{ root: classes.textField }}
          id="outlined-basic"
          label="Password"
          margin="normal"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          type="submit"
          classes={{ root: classes.submitButton }}
          variant="contained"
          color="primary"
        >
          Sign in
        </Button>
        {error && <span>Something went wrong</span>}
      </form>
    </div>
  );
};

export default RegisterPage;
