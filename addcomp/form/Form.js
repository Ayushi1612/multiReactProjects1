import React, { useState } from 'react'
import Blog from '../blog/Blog'

function Form() {
    const [blogArray, setBlogArray] = useState([])
    const [blog, setBlog] = useState({
        title: "",
        description:"",
        author:"",
        time:""
    })

    const handleInput = (e) =>{
        let value = e.target.value
        let name =  e.target.name
        console.log(name,value)
        setBlog({...blog, [name]:value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        // let time = new Date(year, month, day, hours, minutes)
        let time = new Date().toJSON().slice(0,10).split('-').reverse().join('/')
        // setBlog({...blog, time:time})

        const newBlog = {...blog, time:time, id:new Date().getTime().toString()}
        console.log(newBlog)
        setBlogArray([...blogArray, newBlog])
    }
    return (
        <div>
            <label>Title</label>
            <input 
            value={blog.title}
            name="title"
            onChange={handleInput}/>
            <label>Description</label>
            <input 
            value={blog.description}
            name="description"
            onChange={handleInput}/>
            <label>Author</label>
            <input 
            value={blog.author}
            name="author"
            onChange={handleInput}/>
            <button onClick={handleSubmit}>Submit</button>
            <div>
               <Blog blogArray={blogArray}/>
            </div>
        </div>
    )
}

export default Form
