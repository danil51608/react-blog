import CreatePost from "./components/Parts/CreatePost";
import HomePage from "./components/Pages/HomePage";
import AppNavbar from "./components/Navbar/AppNavbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/Pages/LoginPage";
import RegisterPage from "./components/Pages/RegisterPage";
import PostDetail from "./components/Parts/PostDetail";
import SideBar from "./components/Parts/SideBar";
import UserSettings from "./components/Parts/UserSettings";
import AboutPage from "./components/Pages/AboutPage";

import "./App.css";

function App() {
  return (
    <Router>
      <AppNavbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route path="/posts">
              <PostDetail />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/register">
            <RegisterPage />
          </Route>

          <Route path="/create">
            <div style={{ display: "flex", flexDirection:"column" }}>
              <CreatePost />
            </div>
          </Route>

          <Route path="/settings">
            <div style={{ display: "flex" }}>
              <UserSettings />
            </div>
          </Route>

          <Route path="/aboutme">
            <AboutPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
