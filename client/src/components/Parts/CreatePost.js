import classes from "./CreatePost.module.css";
import { useState, useContext } from "react";
import {useHistory} from 'react-router-dom'
import { Context } from "../../context/Context";
import axios from "axios";
import { Paper, TextField, Button } from "@material-ui/core";

const CreatePost = () => {
  // CONSTS AND STATES
  let history = useHistory()
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [cat, setCat] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);
  const { user } = useContext(Context);

  //FUNCTIONS

  const handleSubmit = async (e) => {
    setError(false); //clear error on every new request
    e.preventDefault();

    //create new instance of post
    const newPost = {
      title,
      desc,
      categories: cat,
      userId: user._id,
      username: user.username
    };

    //check if file has been uploaded
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name; //create unique filename
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename; //add file into post

      //upload img
      try {
        await axios.post("/upload", data);
      } catch(e) {}
    }

    //upload post
    try {
      await axios.post("/post", newPost);
      history.push("/"); //redirect to homepage
    } catch(e) {
      setError(true); //show error
    }
  };

  return (
    <div className={classes.container}>
      <Paper elevation={3} classes={{ root: classes.paper }}>
        <form onSubmit={(e) => handleSubmit(e)}>
          {file && (
            <div className={classes.imgContainer}>
              <img src={URL.createObjectURL(file)} />
            </div>
          )}
          <label htmlFor="upload" className={classes.uploadIcon}>
            <i className="fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="upload"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
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
            label="Description"
            multiline
            value={desc}
            minRows={20}
            rows={4}
            margin="normal"
            variant="outlined"
            fullWidth
            onChange={(e) => setDesc(e.target.value)}
          />
          {/* <TextField
            id="standard-basic"
            label="Category"
            value={cat}
            margin="normal"
            onChange={(e) => setCat(e.target.value)}
          /> */}

          <Button
            variant="contained"
            color="primary"
            type="submit"
            margin="normal"
          >
            Create
          </Button>
        </form>
        {error && <p>Something went wrong!</p>}
      </Paper>
    </div>
  );
};

export default CreatePost;