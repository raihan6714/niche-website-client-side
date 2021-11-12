import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MotoBikes from './Pages/Booking/MotoBikes/MotoBikes';
import Login from './Pages/Login/Login/Login';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Register from './Pages/Login/Register/Register';
import AboutUs from './Pages/AboutUs/AboutUs';
import Contact from './Pages/Contact/Contact';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Bike from './Pages/Home/Bike/Bike';
function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Switch>
            {/* home */}
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            {/* about-us */}
            <Route path="/about">
              <AboutUs />
            </Route>
            {/* contact-us */}
            <Route path="/contact">
              <Contact />
            </Route>
            {/* bikes */}
            <PrivateRoute path="/motobikes">
              <MotoBikes />
            </PrivateRoute>
            {/* service */}
            <Route path="/services/:bikeId">
              <Bike />
            </Route>
            {/* dashboard */}
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            {/* login */}
            <Route path="/login">
              <Login />
            </Route>
            {/* register */}
            <Route path="/register">
              <Register />
            </Route>
            {/* not found */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
