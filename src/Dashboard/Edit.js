import React from "react"


function Edit({setIsEditing}){
  return (
    <>
      <div className="small-container">
        <form>
          <h1>Update Employye</h1>
          <label htmlFor="id">ID</label>
          <input id="id" type="text"></input>
          <label htmlFor="name">Name</label>
          <input id="name" type="text"></input>
          <label htmlFor="city">City</label>
          <input id="city" type="text"></input>
          <label htmlFor="salary">Salary</label>
          <input id="salary" type="text"></input>
          <div style={{ marginTop:'30px'}}>
            <input type="submit" value='Update'></input>
            <input 
            style={{ marginLeft:'12px'}}
            className="muted-button" onClick={() => setIsEditing(false)}
            type="button"
            value="Cancel"
            ></input>
          </div>
        </form>
      </div>
    </>
  )
};

export default Edit;

