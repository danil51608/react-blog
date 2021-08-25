import CreatePost from "./components/Parts/CreatePost";
import HomePage from "./components/Pages/HomePage";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/Pages/LoginPage";
import RegisterPage from "./components/Pages/RegisterPage";
import PostDetail from "./components/Parts/PostDetail";
import SideBar from "./components/Parts/SideBar";
import UserSettings from "./components/Parts/UserSettings";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/posts">
            <div style={{ display: "flex" }}>
              <PostDetail />
              <SideBar />
            </div>
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/register">
            <RegisterPage />
          </Route>

          <Route path="/create">
            <div style={{ display: "flex" }}>
              <CreatePost />
              <SideBar />
            </div>
          </Route>

          <Route path="/settings">
            <div style={{ display: "flex" }}>
              <UserSettings />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
