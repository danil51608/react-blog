import Navbar from './components/Navbar/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './components/Pages/HomePage'
import LoginPage from './components/Pages/LoginPage'
import RegisterPage from './components/Pages/RegisterPage'

import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
       <Navbar/>
       <Switch>
         <Route exact path='/'>
           <HomePage />
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
