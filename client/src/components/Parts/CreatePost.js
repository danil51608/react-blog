import classes from "./CreatePost.module.css";
import { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../../context/Context";
import axios from "axios";
import { Paper, TextField, Button, ThemeProvider, CircularProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { theme } from "../theme";

const CreatePost = () => {
  // CONSTS AND STATES
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [isFetching, setIsFetching] = useState(false);
  const { user } = useContext(Context);

  //FUNCTIONS

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false); //clear error on every new request
    setIsFetching(true)

    //create new instance of post
    const newPost = {
      title,
      desc,
      userId: user._id,
      username: user.username,
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
        setIsFetching(false)
      } catch (e) {
        setError(`Image upload has failed`);
        setIsFetching(false)
      }
    }

    //upload post
    try {
      await axios.post("/post", newPost);
      history.push("/"); //redirect to homepage
      setIsFetching(false)
    } catch (e) {
      setError("Something went wrong! Try again later"); //show error
      setIsFetching(false)
    }
  };

  return (
    <div className={classes.container}>
      <ThemeProvider theme={theme}>
        <Paper elevation={3} classes={{ root: classes.paper }}>
          <form onSubmit={(e) => handleSubmit(e)} className={classes.form}>
            {file && (
              <div className={classes.imgContainer}>
                <img src={URL.createObjectURL(file)} alt={"Post"} />
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
              fullWidth
              onChange={(e) => setDesc(e.target.value)}
            />
            {!isFetching && <Button
              variant="contained"
              color="primary"
              type="submit"
              margin="normal"
              disabled={!title || !desc}
            >
              Create
            </Button>}
            {isFetching && <CircularProgress color="primary" className={classes.loader}/>}
          </form>
          {error && (
            <Alert severity="error">
              <strong>{error}</strong>
            </Alert>
          )}
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default CreatePost;
