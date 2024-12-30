import React from "react"


function Header({setIsAdding}){
  return (
    <>
     <div className="container">
      <header>
        <h1>Employee API</h1>
        <div>
          <button onClick={() => setIsAdding(true)} className="round-button">Add Employee</button>
        </div>
      </header>
      </div>
    </>
  )
};

export default Header;

