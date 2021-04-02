import React, { useEffect, useState } from 'react'

const url = 'https://course-api.com/react-tabs-project'

const Tabsapp = () => {
    const [loading, setloading] = useState(true)
    const [jobs, setjobs] = useState([])
    const [value, setvalue] = useState(0)

    const fectchjobs = async () =>{
        const response = await fetch(url)
        const newJobs = await response.json()
        setjobs(newJobs)
        setloading(false)
    }

    useEffect(() => {
        fectchjobs()
    }, [])

    if(loading){
        return(
            <div>
                <h1>LOADING...</h1>
            </div>
        )
    }
    const {company, dates, duties, title} = jobs[value]
    console.log(jobs)
    return (
        <section className="section">
          <div className="title">
            <h2>experience</h2>
            <div className="underline"></div>
          </div>
          <div className="jobs-center">
            {/* btn container */}
            <div className="btn-container">
              {jobs.map((item, index) => {
                return (
                  <button
                    key={item.id}
                    onClick={() => setvalue(index)}
                    className={`job-btn ${index === value && 'active-btn'}`}
                  >
                    {item.company}
                  </button>
                )
              })}
            </div>
            {/* job info */}
            <article className="job-info">
              <h3>{title}</h3>
              <h4>{company}</h4>
              <p className="job-date">{dates}</p>
              {duties.map((duty, index) => {
                return (
                  <div key={index} className="job-desc">
                    <p>{duty}</p>
                  </div>
                )
              })}
            </article>
          </div>
          <button type="button" className="btn">
            more info
          </button>
        </section>
      )
}

export default Tabsapp
