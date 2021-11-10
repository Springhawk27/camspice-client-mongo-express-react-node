import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import About from './components/About/About';
import Navigation from './components/Shared/Navigation/Navigation';
import Footer from './components/Shared/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          {/* <PrivateRoute path="/spots">
              <Spots></Spots>
            </PrivateRoute> */}
          {/* <PrivateRoute path="/guides">
              <Guides></Guides>
            </PrivateRoute> */}
          {/* <Route path="/articledetail">
              <ArticleDetail></ArticleDetail>
            </Route> */}

          {/* <Route path="/booking/:spotId">
              <Booking></Booking>
            </Route> */}
          {/* <PrivateRoute path="/addSpots">
              <AddSpot></AddSpot>
            </PrivateRoute>
            <PrivateRoute path="/manageSpots">
              <ManageSpots></ManageSpots>
            </PrivateRoute>
            <PrivateRoute path="/myBookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/manageAllBooking">
              <ManageAllBookings></ManageAllBookings>
            </PrivateRoute> */}
          <Route path="/about">
            <About></About>
          </Route>
          {/* <Route path="/contact">
              <Contact></Contact>
            </Route> */}
          {/* <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/articledetail">
              <ArticleDetail></ArticleDetail>
            </Route> */}
          {/* <Route path="*">
              <NotFound></NotFound>
            </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
