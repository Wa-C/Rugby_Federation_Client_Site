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
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import AddReviews from './Components/addReviews/AddReviews';

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
          <Route exact path="/home">
            <Home />
          </Route>
          <PrivateRoute exact path="/dashboard/bookings">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/addReviews">
            <AddReviews/>
          </PrivateRoute>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
          <h1 className="text-center my-5">404 - Not Found!</h1>
        </Route>
        </Switch>
      </div>
    </Router>
    </UserContext.Provider>
    </div>
   
  );
}

export default App;
