import classes from "./CreatePost.module.css";
import { useState, useContext } from "react";
import {Context} from "../../context/Context"
import axios from "axios";
import { Paper, TextField, Button } from "@material-ui/core";

const UserSettings = () => {
  const {user} = useContext(Context)
  const [username, setUsername] = useState(user.username)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const handleNameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePassChange = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPass = (e) => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    setError(null)
    setSuccess(null)
    e.preventDefault()
    if(password !== confirmPassword){
      setError('Passwords are not the same')
      return
    }
    else if(!password.trim()){
      setError('Password cannot be empty')
    }
    else {
      try{
        await axios.put(`/user/${user._id}`, {username, password, userId: user._id})
        setSuccess('Profile has been updated successfully')
      } catch(e){
        setError('Something went wrong!')
      }
    }
    
  }


  return (
    <div className={classes.container}>
      <Paper elevation={3}>
        <form onSubmit={handleSubmit}>
          <TextField id="standard-basic" label="Username" value={username} onChange={(e) => handleNameChange(e)}/>
          <TextField id="standard-basic" label="New Password" value={password} onChange={(e) => handlePassChange(e)}/>
          <TextField id="standard-basic" label="Confirm New Password" value={confirmPassword} onChange={(e) => handleConfirmPass(e)}/>
          <Button type='submit'>Save changes</Button>
        </form>
        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
      </Paper>
    </div>
  );
};

export default UserSettings;
