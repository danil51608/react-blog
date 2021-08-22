import classes from "./LoginPage.module.css";
import { TextField, Button } from "@material-ui/core";

const RegisterPage = (props) => {
  return (
    <div className={classes["login-body"]}>
      <form className={classes["login-form"]}>
      <TextField
          classes={{ root: classes.textField }}
          id="outlined-basic"
          margin="normal"
          label="Username"
          variant="outlined"
        />
        <TextField
          classes={{ root: classes.textField }}
          id="outlined-basic"
          margin="normal"
          label="Email"
          variant="outlined"
        />
        <TextField
          classes={{ root: classes.textField }}
          id="outlined-basic"
          label="Password"
          margin="normal"
          variant="outlined"
        />
        <Button classes={{root: classes.submitButton}} variant="contained" color="primary">
          Sign in
        </Button>
      </form>
    </div>
  );
};

export default RegisterPage;
