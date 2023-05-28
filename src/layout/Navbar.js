import React from "react";
import { Link } from "react-router-dom";
import logo from './open-book.png';
import "./navbar.css";




export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link className="navbar-brand title" to="/">
          <img className="logo" src={logo} alt="My Logo" />
        
          Books Application</Link>
          <div className="">
          <Link className="btn btn-outline-light m-2 " to="/adduser">Add Book</Link>
          <Link className="btn btn-outline-light" to="/login">Login</Link>
          
          </div>
        </div>
      </nav>
    </div>
  );
}
