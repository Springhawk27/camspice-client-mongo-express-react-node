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
import NotFound from './components/NotFound/NotFound';
import Cameras from './components/Home/Cameras/Cameras';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Accessories from './components/Home/Accessories/Accessories';
import Login from './components/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import Register from './components/Register/Register';
import Order from './components/Order/Order';



function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/cameras">
              <Cameras></Cameras>
            </Route>
            <Route path="/accessories">
              <Accessories></Accessories>
            </Route>
            {/* <PrivateRoute path="/guides">
              <Guides></Guides>
            </PrivateRoute> */}
            {/* <Route path="/articledetail">
              <ArticleDetail></ArticleDetail>
            </Route> */}

            <Route path="/orders/:productId">
              <Order></Order>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
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
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            {/* <Route path="/articledetail">
              <ArticleDetail></ArticleDetail>
            </Route> */}
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
