import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { deleteEmployee, listEmployees } from "../Services/EmployeeService";
import Swal from "sweetalert2";



const List = () => {

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmployees().then((response) => {
      setEmployees(response.data);
    }).catch(error => {
      console.error(error);
    })
  }

  const navigator = useNavigate();

  function addEmployee() {
    navigator('/add-employee');
  }

  function updateEmployee(e_id) {
    navigator(`/edit-employee/${e_id}`);
  }

  function removeEmployee(e_id) {
    console.log(e_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        deleteEmployee(e_id).then((response) => {
          getAllEmployees();
        }).catch(error => {
          console.error(error);
        })
        Swal.fire({
          title: "Deleted!",
          text: "Employee has been deleted.",
          icon: "success"
        });
      }
    });
  }

  return (
    <>
      <div className="container">
        <button onClick={addEmployee} className="btn btn-primary">Add Employee</button>
      </div>
      <div className="container" >
        <table className="striped-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>City</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map(employee =>
                <tr key={employee.e_id}>
                  <td>{employee.e_id}</td>
                  <td>{employee.e_name}</td>
                  <td>{employee.e_city}</td>
                  <td>{employee.e_salary}</td>
                  <td>
                    <button className="btn btn-primary md-10" onClick={() => updateEmployee(employee.e_id)}>Update</button>
                    <button className="btn btn-primary" onClick={() => removeEmployee(employee.e_id)}>Delete</button>
                  </td>
                 
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
};

export default List;
