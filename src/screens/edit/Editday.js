import React, { useState,useEffect } from 'react'
import './Editday.css'
import { useFetch } from '../../hooks/useFetch'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Editday() {
  const[title,setTitle] = useState('')
  const[content,setContent] = useState('')
  const [validationError,setValidationError] = useState('')
  const[modifiedField, setModifiedField] = useState([])

  
  const navigate = useNavigate()

  const location = useLocation()
  const {state:day} = location;
  const{data,error,optionsData} = useFetch(`https://jsonplaceholder.typicode.com/posts/${day.id}`,"PATCH")
 
  const onTitleChange = (e)=>{
    setTitle(e.target.value)
    setModifiedField({...modifiedField,title:e.target.value})
  }
  const onContentChange = (e)=>{
    setContent(e.target.value)
    setModifiedField({...modifiedField,body:e.target.value})
  }

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

    optionsData(modifiedField)
  }

  useEffect(()=>{
    setTitle(day.title)
    setContent(day.body)
    if(data.length!==0)
    {
      console.log(data);
      const timer = setTimeout(() => navigate("/"),3000); 
      return ()=> clearTimeout(timer)
    }
    
  },[data,navigate,day.body,day.title])

  return (
    <div className="outercontainer">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label><h6>Title:</h6></label>
          <input type='text'className='form-control' value={title} onChange={onTitleChange}/>
        </div>
        <div className="form-group">
        <label><h6>Content:</h6></label>
        <textarea className='form-control' value={content} onChange={onContentChange}></textarea>
        </div>
        {
          validationError && <div className="alert alert-danger" role="alert">
          {validationError}
        </div>
        }
        {
          data.length!==0 && <div className="alert alert-success" role="alert">
          You have updated your day!
        </div>
        }
        {
          error && <div className="alert alert-danger" role="alert">
          {error}
        </div>
        }
        <div className="float-end">
          <button type="submit" className="btn btn-outline-dark">
            Apply changes
          </button>
        </div>
        
      </form>
    </div>
  )
}
