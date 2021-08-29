import classes from "./EditPost.module.css";
import { Paper, TextField, Button, makeStyles } from "@material-ui/core";
import { useState, useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const useStyles = makeStyles({
    paperEl: {
        padding: '20px'
    }
})

const EditPost = (props) => {
  const styles = useStyles()
  const { setEdit, post } = props;
  const { user } = useContext(Context);
  const [title, setTitle] = useState(post.title);
  const [desc, setDesc] = useState(post.desc);

  const handleSave = async () => {
    try {
      await axios.put(`/post/${post._id}`, {
        title: title,
        desc: desc,
        userId: user._id,
      });
      setEdit(false);
    } catch (e) {
      console.log("some error");
    }
  };
  return (
    <div className={classes.container}>
      <Paper elevation={3} className={styles.paperEl}>
      <div className={classes.imgContainer}>
        <img src={`/images/${post.photo}`} alt={post}/>
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
        <Button
          variant="contained"
          color="primary"
          type="submit"
          margin="normal"
          onClick={handleSave}
        >
          Save
        </Button>
      </Paper>
    </div>
  );
};

export default EditPost;
