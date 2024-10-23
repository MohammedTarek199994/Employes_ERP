import React from 'react';
import { FaTachometerAlt, FaUsers, FaCogs, FaUser } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h2>ERP Dash</h2>
      </div>
      <ul>
        <li>
          <FaTachometerAlt /> Dashboard
        </li>
        <li className="active">
          <FaUsers /> Employees
        </li>
        <li>
          <FaUser /> Teams
        </li>
        <li>
          <FaCogs /> Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
