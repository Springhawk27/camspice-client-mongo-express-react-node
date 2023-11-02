import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import action_camera from "../../../images/action_camera.png";

import { Switch, Route, useRouteMatch } from "react-router-dom";
import AddCamera from "../AddCamera/AddCamera";
import AddAccessory from "../AddAccessory/AddAccessory";
import MyOrders from "../MyOrders/MyOrders";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import useAuth from "../../../hooks/useAuth";
import Payment from "../Payment/Payment";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import AdminRoute from "../../AdminRoute/AdminRoute";
import Profile from "../Profile/Profile";
import Review from "../Review/Review";
import ManageProducts from "../ManageProducts/ManageProducts";

const Dashboard = () => {
  let { path, url } = useRouteMatch();

  const [orders, setOrders] = useState([]);
  const [allOrders, setAllOrders] = useState([]);
  const { user, logout, admin } = useAuth();

  useEffect(() => {
    fetch("https://camspice-server.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => {
        const myOrders = data.filter((order) => order.email === user?.email);

        setOrders(myOrders);
      });
  }, [orders, user.email]);

  useEffect(() => {
    fetch("https://camspice-server.vercel.app/orders")
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, [allOrders]);

  return (
    <div>
      <header
        // style={{ backgroundColor: '#4299E1' }}
        className=" bg-blue-500 w-full  p-4 flex justify-between items-center fixed"
      >
        <nav className="flex items-center">
          <img className="w-7 h-7" src={action_camera} alt="action_camera" />
          <div className="text-white text-xs hidden sm:block ml-2">
            <NavLink
              to="/dashboard"
              //   style={{ backgroundColor: "#4299E1" }}
              className=" hover:bg-blue-600 p-2 rounded cursor-pointer font-bold text-lg "
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/home"
              //   style={{ backgroundColor: "#4299E1" }}
              className=" hover:bg-blue-600 p-2 rounded cursor-pointer font-bold text-lg "
            >
              Home
            </NavLink>
          </div>
        </nav>
        <div className="text-white">
          <span>hello, {user.displayName}</span>
        </div>
      </header>

      <main className="flex w-full h-screen  pt-14">
        <aside className=" w-80 h-screen bg-gray shadow-md w-fulll hidden sm:block">
          <div className=" flex flex-col justify-between h-screen p-4 bg-gray-800">
            <div className="text-sm text-left ">
              {admin && (
                <div>
                  <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300 ">
                    <NavLink
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#48BB78",
                      }}
                      style={{ textDecoration: "none" }}
                      to={`${url}/makeadmin`}
                    >
                      <button color="inherit">Make Admin</button>
                    </NavLink>
                  </div>
                  <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                    <NavLink
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#48BB78",
                      }}
                      style={{ textDecoration: "none" }}
                      to={`${url}/addcamera`}
                    >
                      <button color="inherit">Add Product</button>
                    </NavLink>
                  </div>
                  <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                    <NavLink
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#48BB78",
                      }}
                      style={{ textDecoration: "none" }}
                      to={`${url}/addaccessory`}
                    >
                      <button color="inherit">Add Accessory</button>
                    </NavLink>
                  </div>
                  <div className="bg-gray-900 flex justify-between items-center text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                    <NavLink
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#48BB78",
                      }}
                      style={{ textDecoration: "none" }}
                      to={`${url}/manageallorders`}
                    >
                      <button color="inherit">Manage All Orders</button>
                    </NavLink>
                    <span className="w-4 h-4 bg-blue-600 rounded-full text-white text-center font-normal text-xs">
                      {allOrders.length}
                    </span>
                  </div>
                  <div className="bg-gray-900 flex justify-between items-center text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                    <NavLink
                      activeStyle={{
                        fontWeight: "bold",
                        color: "#48BB78",
                      }}
                      style={{ textDecoration: "none" }}
                      to={`${url}/manageproducts`}
                    >
                      <button color="inherit">Manage All Products</button>
                    </NavLink>
                  </div>
                </div>
              )}
              <div className="bg-gray-900 flex justify-between items-center text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#48BB78",
                  }}
                  style={{ textDecoration: "none" }}
                  to={`${url}/myorders`}
                >
                  <button color="inherit">My Orders</button>
                </NavLink>
                <span className="w-4 h-4 bg-blue-600 rounded-full text-white text-center font-normal text-xs">
                  {orders.length}
                </span>
              </div>
              <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#48BB78",
                  }}
                  style={{ textDecoration: "none" }}
                  to={`${url}/payment`}
                >
                  <button color="inherit">Payment</button>
                </NavLink>
              </div>
              <div className="bg-gray-900 text-white p-2 rounded mt-2 cursor-pointer hover:bg-gray-700 hover:text-blue-300">
                <NavLink
                  activeStyle={{
                    fontWeight: "bold",
                    color: "#48BB78",
                  }}
                  style={{ textDecoration: "none" }}
                  to={`${url}/review`}
                >
                  <button color="inherit">Review</button>
                </NavLink>
              </div>
            </div>

            <div className="flex p-3 text-white bg-red-500 rounded cursor-pointer text-center text-sm">
              <button
                onClick={logout}
                className="rounded inline-flex items-center"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-semibold">Logout</span>
              </button>
            </div>
          </div>
        </aside>

        <section className="w-full p-4 overflow-auto">
          <div className="w-full h-100 border-solid border-2 p-4 text-md">
            <Switch>
              <Route exact path={`${path}/profile`}>
                <Profile></Profile>
              </Route>
              <AdminRoute path={`${path}/makeadmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute path={`${path}/addcamera`}>
                <AddCamera></AddCamera>
              </AdminRoute>
              <AdminRoute path={`${path}/addaccessory`}>
                <AddAccessory></AddAccessory>
              </AdminRoute>
              <AdminRoute path={`${path}/manageallorders`}>
                <ManageAllOrders></ManageAllOrders>
              </AdminRoute>
              <AdminRoute path={`${path}/manageproducts`}>
                <ManageProducts></ManageProducts>
              </AdminRoute>
              <Route path={`${path}/myorders`}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/payment`}>
                <Payment></Payment>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>
            </Switch>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
