import React, { useEffect, useState } from 'react'
import './Createday.css'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'

export default function Createday() {
  
  const[title,setTitle] = useState('')
  const[content,setContent] = useState('')
  const [validationError,setValidationError] = useState('')

  const{data,error,optionsData} = useFetch('https://jsonplaceholder.typicode.com/posts',"POST")
  const navigate = useNavigate()

  const handleSubmit =(e)=>{
    e.preventDefault()
    if(!title){
      setValidationError("Title shouldn't be empty")
      return
    }
    if(!content){
      setValidationError("Content Cannot be empty")
      return
    }
    setValidationError('')

    optionsData(
      {
        title,
        body: content,
        userId: 2
      }
    )
  }

  useEffect(()=>{
    if(data.length!==0)
    {
      console.log(data);
      const timer = setTimeout(() => navigate("/"),3000);
      return ()=> clearTimeout(timer)
    }
  },[data,navigate])

  return (
    <div className="outercontainer">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label><h6>Title:</h6></label>
          <input type='text'className='form-control' value={title} onChange={(e)=>setTitle(e.target.value)}/>
        </div>
        <div className="form-group">
        <label><h6>Content:</h6></label>
        <textarea className='form-control' value={content} onChange={(e)=>setContent(e.target.value)}></textarea>
        </div>
        {
          validationError && <div className="alert alert-danger" role="alert">
          {validationError}
        </div>
        }
        {
          data.length!==0 && <div className="alert alert-success" role="alert">
          Your day has been successfully created!
        </div>
        }
        {
          error && <div className="alert alert-danger" role="alert">
          {error}
        </div>
        }
        <div className="float-end">
          <button type="submit" className="btn btn-outline-dark">
            Create
          </button>
        </div>
        
      </form>
    </div>
  )
}
