import './App.css';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import { createContext, useState } from 'react';
import Login from './Components/Login/Login';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    name : '',
    newUser: false,
    email: '',
    password: '',
    photo: '',
    error:'',
    success: false
  });
  return (
    <div>
  
   <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
   <Router>
   {/* <Header />    */}
      <div>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
    </div>
   
  );
}

export default App;
