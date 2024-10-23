import React from "react";
import { FaEnvelope, FaBell } from "react-icons/fa"; 
import "./NavBar.css"; 

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="nav-items">
        {/* Notifications section */}
        <div className="nav-icon">
          <FaEnvelope />
          <span className="badge">3+</span>
        </div>

        <div className="nav-icon">
          <FaBell />
          <span className="badge">9+</span>
        </div>

        {/* User info */}
        <div className="nav-user">
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/23/50/73/1000_F_223507324_jKl7xbsaEdUjGr42WzQeSazKRighVDU4.jpg" 
            alt="User"
            className="user-avatar"
          />
          <div className="user-info">
            <span className="user-name">Mohamed Kamal</span>
            <span className="user-role">Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
