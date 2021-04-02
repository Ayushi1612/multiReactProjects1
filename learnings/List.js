import React from 'react'

const List = ({people}) => {
    return (
        <div>
            {people.map((people) => {
                const {id, name, age, image} = people;
                return(
                    <article key={id} className='person'>
                        <img src={image} alt={name}></img   >
                            <div>         
                                <h4>{name}</h4>
                                <p>{age} years</p>
                           </div>
                    </article>
                )
            })}
        </div>
    )
}

export default List
