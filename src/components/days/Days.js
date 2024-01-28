import React from 'react'
import './Days.css'
import { useNavigate } from 'react-router-dom';

export default function Days({day}) {
    const navigate = useNavigate()
    const handleClick =()=>{
        navigate(`day/${day.id}`,{state:day})
    }
  return (
    <div className="card" onClick={handleClick}>
      <h5 className="card-header">{day.title}</h5>
      <div className="card-body">
        <p className="card-text">
          {day.body}
        </p>
       
      </div>
    </div>
  );
}
