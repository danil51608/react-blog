import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Parts/Header";
import LoginPage from "./components/Pages/LoginPage";
import RegisterPage from "./components/Pages/RegisterPage";
import PostDetail from "./components/Parts/PostDetail";
import Posts from "./components/Parts/Posts";
import SideBar from "./components/Parts/SideBar";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <div>
            <Route exact path="/">
              <Header />
              <div style={{display: 'flex'}}>
                <Posts />
                <SideBar />
              </div>
            </Route>

            <Route path="/posts">
              <div style={{display: 'flex'}}>
                <PostDetail />
                <SideBar />
              </div>
            </Route>
          </div>

          <Route path="/posts">
            <PostDetail />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
