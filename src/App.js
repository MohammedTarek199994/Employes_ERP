import React from 'react';
import Sidebar from './components/Sidebar';
import NavBar from './components/NavBar';
import EmployeeTable from './components/EmployeeTable';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <NavBar />
        <EmployeeTable />
      </div>
    </div>
  );
};

export default App;
