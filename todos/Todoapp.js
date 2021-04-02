import React, { useState } from 'react'
import Form from './Form'
import Todos from './Todos'
const Todoapp = () => {
    const [inputText, setInputText] = useState("")
    const [todos, setTodos] = useState([])
    return (
        <div>
            <Form inputText={inputText} setInputText={setInputText} setTodos={setTodos} todos={todos}/>
            <Todos/>
        </div>
    )
}

export default Todoapp
