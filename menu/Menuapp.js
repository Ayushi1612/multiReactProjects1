import React, { useState } from 'react'
import Category from './Category'
import data from './data'
import Menu from './Menu'

const allcategories =["all", ...new Set(data.map((item)=> item.category))] 
const Menuapp = () => {
    const [items, setitems] = useState(data)
    const [category, setcategory] = useState(allcategories)
    const filteritems =(category)=>{
            if(category=== 'all'){
                setitems(data)
                return
            }
            const newitems = data.filter((item)=> item.category === category)
            setitems(newitems)
    }    
    return (
        <div>
            <h1>Our Menu</h1>
            <Category filteritems={filteritems} category={category}/>
           <Menu data={items}/>
        </div>
    )
}

export default Menuapp
