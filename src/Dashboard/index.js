import React, { useState } from "react"
import Add from "./Add";
import Edit from "./Edit";
import Header from "./Header";
import List from "./List";
import Swal from "sweetalert2";


function Dashboard() {
    const [isAdding,setIsAdding]=useState(false);
    const [isEditing,setIsEditing]=useState(false);

  return (
    <>
      {/* list */}
      {!isAdding && !isEditing && (
        <>
        <Header 
        setIsAdding={setIsAdding} 
        />
        <List
                  setIsEditing={setIsEditing}  
                  />
        </>
      )}
      {/* add */}
      {isAdding && (
        <>
        <Add
        setIsAdding={setIsAdding} />
        </>
      )}
      {/* edit */}
      {isEditing && (
        <>
        <Edit
        setIsEditing={setIsEditing}
        />
        </>
      )}

    </>
  )
}

export default Dashboard;
