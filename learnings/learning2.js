import React, {useState} from 'react'
import './index1.css'
import List from './List'
import data from './data'
const Learning2 = () => {
    const [people, setPeople] = useState(data)
    return (
        <main>
            <section className="container">
            <h3>{people.length} Birthdays today</h3>            
            <List people={people}/>
            <button onClick={()=>{ setPeople([])  }}>Clear All</button>
            </section>
        </main>
    )
}
export default Learning2
