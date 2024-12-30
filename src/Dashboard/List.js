import React from "react"


function List({setIsEditing}){
  return (
    <>
      <div className="container" >
      <table className="striped-table">
  <thead>
    <tr>
      <th>No</th>
      <th>Name</th>
      <th>City</th>
      <th>Salary</th>
      <th colSpan={2} className="text-center">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Asha Mane</td>
      <td>Mumbai</td>
      <td>100000</td>
      <td className="text-right">
        <button
        onClick={() => setIsEditing(true)} className="button muted-button">
          Edit
        </button>
      </td>
      <td className="text-left">
        <button
         className="button muted-button">
          Delete
        </button>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>Kamal Mehta</td>
      <td>Mumbai</td>
      <td>500000</td>
      <td className="text-right">
        <button
        onClick={() => setIsEditing(true)} className="button muted-button">
          Edit
        </button>
      </td>
      <td className="text-left">
        <button
         className="button muted-button">
          Delete
        </button>
      </td>
    </tr>
    <tr>
      <td>3</td>
      <td>Rohan Khamkar</td>
      <td>Pune</td>
      <td>900000</td>
      <td className="text-right">
        <button
        onClick={() => setIsEditing(true)} className="button muted-button">
          Edit
        </button>
      </td>
      <td className="text-left">
        <button
        className="button muted-button">
          Delete
        </button>
      </td>
    </tr>
  </tbody>
</table>
      </div>
    </>
  )
};

export default List;
