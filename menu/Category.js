import React from 'react'

const Category = ({filteritems, category}) => {
    return (
        <div className='btn-container'>
            {category.map((category, index)=>{
                return(
                    <button
                    type='button'
                    className='filter-btn'
                    key={index}
                    onClick={()=>filteritems(category)}
                    >
                        {category}
                    </button>
                )
            })}
        </div>
    )
}

export default Category
