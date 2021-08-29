import classes from "./UserSettings.module.css";
import { useState, useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { Paper, TextField, Button } from "@material-ui/core";

const UserSettings = () => {
  const { user, dispatch } = useContext(Context);
  const [username, setUsername] = useState(user.username);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [file, setFile] = useState(null);
  const handleNameChange = (e) => {
    setUsername(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPass = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    const userUpdate = {
      username,
      userId: user._id
    }

    setError(null);
    setSuccess(null);

    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords are not the same");
      return;
    } else {
      if(file){
        const data = new FormData();
        const filename = file.name
        data.append('name', filename)
        data.append('file', file)
        userUpdate.profilePic = filename
        user.profilePic = filename
        
        try{
          await axios.post('/upload', data)
        } catch(e){}
      }
      else if(password.trim()){
        userUpdate.password = password
      }
      try {
        const res = await axios.put(`/user/${user._id}`, userUpdate);
        const updatedUser = res.data
        dispatch({ type: "UPDATE_USER", payload: updatedUser})
        setSuccess("Profile has been updated successfully");
      } catch (e) {
        setError("Something went wrong!");
      }
    }
  };

  return (
    <div className={classes.container}>
      <Paper elevation={3} classes={{ root: classes.paper }}>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.imgContainer}><img src={file ? URL.createObjectURL(file) : `/images/${user.profilePic}`} alt='post'/></div>
          <label htmlFor="upload" className={classes.uploadIcon}>
            <i className="fas fa-plus"></i>
          </label>
          <input type='file' id='upload' onChange={e=> setFile(e.target.files[0])}/>
          <TextField
            id="standard-basic"
            label="Username"
            value={username}
            margin="normal"
            onChange={(e) => handleNameChange(e)}
          />
          <TextField
            id="standard-basic"
            label="New Password"
            value={password}
            margin="normal"
            onChange={(e) => handlePassChange(e)}
          />
          <TextField
            id="standard-basic"
            label="Confirm New Password"
            value={confirmPassword}
            margin="normal"
            onChange={(e) => handleConfirmPass(e)}
          />
          <Button type="submit" color="primary" variant="contained">
            Save
          </Button>
        </form>
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
      </Paper>
    </div>
  );
};

export default UserSettings;
