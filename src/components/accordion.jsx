import React, { useEffect, useState } from 'react'
import apiData from "../API/data.json"
import FAQ from '../UI/FAQ';

const Accordion = () => {
    const [data, setData] = useState([]);
    const [activeId, setActiveId] = useState(false);


    useEffect(() => {
        setData(apiData);
    }, [])

     const handleButton = (id) => {
         setActiveId((prevId) => (prevId === id ? false : id));
         console.log("C;ocked");
  }
  
    
  return (
    <div>
          <h1>The Accordion</h1> 
          <ul className='section-accordion'>
              {data.map((curElem) => {
                  return (
                      <FAQ key={curElem.id}
                          curData={curElem}
                          isActive={activeId === curElem.id}
                          onToggle={()=>handleButton(curElem.id) } />
                  )
              })}
          </ul>
    </div>
  )
}

export default Accordion;
