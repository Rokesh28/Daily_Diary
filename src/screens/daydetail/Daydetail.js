import React from 'react'
import './Daydetail.css'
import { useLocation, useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch';

export default function Daydetail() {
  const location = useLocation();

  const { state:day } = location;
  const navigate = useNavigate()

  const {data,error,optionsData} = useFetch(`https://jsonplaceholder.typicode.com/posts/${day.id}`,"DELETE")

  const handleEdit = ()=>{
      navigate(`/edit/${day.id}`, {state:day})
  }
  const handleDelete = ()=>{
    optionsData()
  }

  return (
    <div className="container outer">
      <div className="jumbotron">
        <h1 className="display-4">{day.title}</h1>
        <p className="lead">{day.body}</p>
        {
          data.length!==0 && <div className="alert alert-success" role="alert">
          Your day has been deleted successfully!
        </div>
        }
        {
          error && <div className="alert alert-danger" role="alert">
          {error}
        </div>
        }
        <div className="float-end">
          <button type="button" className="btn btn-outline-dark" onClick={handleEdit}>
            Edit
          </button>
          <button type="button" className="btn btn-outline-dark" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
