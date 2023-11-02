import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Cameras from "./components/Home/Cameras/Cameras";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Accessories from "./components/Home/Accessories/Accessories";
import Login from "./components/Login/Login";
import AuthProvider from "./contexts/AuthProvider";
import Register from "./components/Register/Register";
import Order from "./components/Order/Order";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import ArticleDetail from "./components/Home/ArticleDetail/ArticleDetail";

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
            <Route path="/articledetail">
              <ArticleDetail></ArticleDetail>
            </Route>
            <PrivateRoute path="/orders/:productId">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

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
