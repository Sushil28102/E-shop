import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

const itemSelector=useSelector((state)=>state.cart)


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container justify-content-center ">
          <Link to="/" className="navbar-brand"><img src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?size=50&ext=jpg" alt="" /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active"> Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link" >About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link" >Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">Cart</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">Items:{itemSelector.length}</NavLink>
              </li>
            </ul>
            <nav className="navbar bg-body-tertiary">
              <div className="container-fluid">
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
