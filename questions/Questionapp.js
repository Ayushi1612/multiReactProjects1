import React, { useState } from 'react'
import data from './data'
import Question from './Question'
import './index.css'
const Questionapp = () => {
    const [questions, setQuestions]= useState(data)
    return (
        <main>
            <div className="container">
                <h3>Questions and Answer list</h3>
                <section className="info">
                    {questions.map((question)=>{
                        return <Question key={question.id}{...question}/>
                    })}
                </section>
            </div>
        </main>
    )
}

export default Questionapp
