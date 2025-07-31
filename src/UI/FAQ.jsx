import React, { useState } from 'react'

const FAQ = ({ curData,onToggle,isActive }) => {
  const { question, answer } = curData;
  console.log("CurData", curData);
  console.log("ISACTIVE", isActive);
  console.log("Ontooggle", onToggle);  



  return (
      <div>
           <li  >
               <div className='accordion-grid'>
                <p>{question}</p>
                <button onClick={onToggle} className={isActive ? "active-btn" : ""}>
                {isActive ? "Close" : "Show"}
                </button>            
                </div>
                <p>{isActive && answer}</p>
            </li>
      
    </div>
  )
}

export default FAQ
