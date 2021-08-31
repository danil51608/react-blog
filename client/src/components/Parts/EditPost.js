import classes from "./EditPost.module.css";
import { Paper, TextField, Button, makeStyles, CircularProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { useState, useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const useStyles = makeStyles({
  paperEl: {
    padding: "20px",
  },
});

const EditPost = (props) => {
  const { setEdit, post } = props; // toggle edit mode
  const { user } = useContext(Context);
  const styles = useStyles();
  const [title, setTitle] = useState(post.title);
  const [desc, setDesc] = useState(post.desc);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('')

  const handleSave = async () => {
    setIsFetching(true);
    setError('')
    
    try {
      await axios.put(`/post/${post._id}`, {
        title: title,
        desc: desc,
        userId: user._id,
      });

      setIsFetching(false);
      setEdit(false); // edit mode off
    } catch (e) {
      setIsFetching(false);
      setError("Something went wrong!");
    }
  };
  return (
    <div className={classes.container}>
      <Paper elevation={3} className={styles.paperEl}>
        <div className={classes.imgContainer}>
          <img src={`/images/${post.photo}`} alt={post} />
        </div>
        <TextField
          id="standard-basic"
          label="Title"
          margin="normal"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
        />
        <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          value={desc}
          minRows={20}
          rows={4}
          margin="normal"
          onChange={(e) => setDesc(e.target.value)}
          fullWidth
        />
        {!isFetching && <Button
          variant="contained"
          color="primary"
          type="submit"
          margin="normal"
          onClick={handleSave}
        >
          Save
        </Button>}
        {isFetching && <CircularProgress color="primary" className={classes.loader}/>}
        {error && (
            <Alert severity="error">
              <strong>{error}</strong>
            </Alert>
          )}
      </Paper>
    </div>
  );
};

export default EditPost;
