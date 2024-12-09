import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar_wrapper">
        <div className="navbar_container">
          <div className="navbar_logo">
            <h1>PayOsh</h1>
            <NavLink to="/">
            <img
              src={`${process.env.PUBLIC_URL}/Img/lagan.png`} 
              alt="PayOsh Logo"
            />
            </NavLink>
          </div>

          <div className="navbar_nav">
            <ul>
              <li>
                <NavLink
                
                  to="/"
                  className="list"
                >
                  Bosh Sahifa
                </NavLink>
              </li>
              <li>
                <NavLink
                
                  to="/menu"
                  className="list"
                >
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/biz"
                  className="list"
                >
                  Biz Haqimizda
                </NavLink>
              </li>
              <li>
                <NavLink
                
                  to="/aloqa"
                  className="list"
                >
                  Aloqa
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="navbar_conact">
            <select name="Location" id="">
              <option value="Uz">Uz</option>
              <option value="En">En</option>
              <option value="Ru">Ru</option>
            </select>
            <button><NavLink to="/aloqa">Aloqa</NavLink></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
