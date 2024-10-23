import React from "react";
import { FaCheckCircle, FaTimesCircle, FaTrashAlt } from "react-icons/fa";
import "./EmployeeTable.css";

const EmployeeTable = () => {
  const employees = [
    {
      name: "Ahmed Ali",
      role: "software",
      email: "example@gmail.com",
      phone: "013154854841",
      startDate: "25/12/2024",
      active: true,
    },
    {
      name: "Ahmed Ali",
      role: "IT",
      email: "example@gmail.com",
      phone: "013154854841",
      startDate: "25/12/2024",
      active: true,
    },
    {
      name: "Ahmed Ali",
      role: "IT",
      email: "example@gmail.com",
      phone: "013154854841",
      startDate: "25/12/2024",
      active: true,
    },
    {
      name: "Ahmed Ali",
      role: "IT",
      email: "example@gmail.com",
      phone: "013154854841",
      startDate: "25/12/2024",
      active: true,
    },
    {
      name: "Ahmed Ali",
      role: "IT",
      email: "example@gmail.com",
      phone: "013154854841",
      startDate: "25/12/2024",
      active: true,
    },
    {
      name: "Ahmed Ali",
      role: "IT",
      email: "example@gmail.com",
      phone: "013154854841",
      startDate: "25/12/2024",
      active: true,
    },
    {
      name: "Ahmed Ali",
      role: "IT",
      email: "example@gmail.com",
      phone: "013154854841",
      startDate: "25/12/2024",
      active: false,
    },
    {
      name: "Ahmed Ali",
      role: "IT",
      email: "example@gmail.com",
      phone: "013154854841",
      startDate: "25/12/2024",
      active: true,
    },
    {
      name: "Ahmed Ali",
      role: "IT",
      email: "example@gmail.com",
      phone: "013154854841",
      startDate: "25/12/2024",
      active: true,
    },
    {
      name: "Ahmed Ali",
      role: "IT",
      email: "example@gmail.com",
      phone: "013154854841",
      startDate: "25/12/2024",
      active: true,
    }
  ]
  ;

  return (
    <div className="employee-table-container">
      <div className="table-header">
        <input
          type="text"
          placeholder="Search employees"
          className="search-input"
        />
        <button className="add-btn">+ New Employees</button>
      </div>
      <table className="employee-table">
        <thead>
          <tr>
            <th>Employee</th>
            <th>Role</th>
            <th>E-Mail</th>
            <th>Phone</th>
            <th>Start Date</th>
            <th>Active</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                  }}>
                  <img
                    src="https://as2.ftcdn.net/v2/jpg/02/23/50/73/1000_F_223507324_jKl7xbsaEdUjGr42WzQeSazKRighVDU4.jpg" 
                    alt="User"
                    className="user-avatar"
                  />
                  <p> {emp.name}</p>
                </div>
              </td>
              <td>{emp.role}</td>
              <td>{emp.email}</td>
              <td>{emp.phone}</td>
              <td>{emp.startDate}</td>
              <td>
                {emp.active ? (
                  <FaCheckCircle className="icon-active" />
                ) : (
                  <FaTimesCircle className="icon-inactive" />
                )}
              </td>
              <td>
                <FaTrashAlt className="icon-delete" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;
