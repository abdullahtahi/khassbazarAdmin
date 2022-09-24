import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="main-wrapper main-wrapper-1">
      <div
        style={{ paddingTop: "55px" }}
        className="main-sidebar sidebar-style-3"
      >
        <aside id="sidebar-wrapper">
          <div className="sidebar-brand">
            <Link to="/">Khass Bazzar</Link>
            {/* <Link to="/">Khass Bazzar</Link> */}
          </div>
          {/* <div className="sidebar-brand sidebar-brand-sm">
            {/* <a href="index-2.html">CP</a> */}
          {/* </div> */}
          <ul className="sidebar-menu">
            <li className="dropdown">
              <Link
                to="#"
                className="nav-link has-dropdown"
                data-toggle="dropdown"
              >
                <i className="fas fa-columns" /> <span>User</span>
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="nav-link" to="/khassbazzar/customer">
                    Customer
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" to="/khassbazzar/admin">
                    Admin
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link className="nav-link" to="/khassbazzar/product">
                <i className="far fa-square" /> <span>Products</span>
              </Link>
            </li>
            <li className="dropdown">
              <Link to="/khassbazzar/order" className="">
                <i className="fas fa-th" />
                <span>Orders</span>
              </Link>
            </li>

            <li className="dropdown">
              <Link to="#" className="nav-link has-dropdown">
                <i className="fas fa-th-large" /> <span>Setting</span>
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
