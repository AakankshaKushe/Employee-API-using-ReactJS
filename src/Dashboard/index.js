import React, { useState } from "react"
import Add from "./Add";
import Edit from "./Edit";
import Header from "./Header";
import List from "./List";
import Swal from "sweetalert2";


function Dashboard() {
    const [employees,setEmployees]=useState();
    const [selectedEmployee,setSelectedEmployee]=useState(null);
    const [isAdding,setIsAdding]=useState(false);
    const [isEditing,setIsEditing]=useState(false);
    const handleEdit = () =>{

    }
    const handleDelete = () =>{

    }
  return (
    <>
      {/* list */}
      {!isAdding && !isEditing && (
        <>
        <Header 
        setIsAdding={setIsAdding} 
        />
        <List
                  /* employees={employees} 
                  handleEdit={handleEdit}
                  handleDelete={handleDelete} */
                  setIsEditing={setIsEditing}  
                  />
        </>
      )}
      {/* add */}
      {isAdding && (
        <>
        <Add
        setEmployees={setEmployees}
        employees={employees}
        isAdding={isAdding}
        setIsAdding={setIsAdding} />
        </>
      )}
      {/* edit */}
      {isEditing && (
        <>
        <Edit
        employees={employees}
        setEmployees={setEmployees}
        selectedEmployee={selectedEmployee}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        />
        </>
      )}

    </>
  )
}

export default Dashboard;
