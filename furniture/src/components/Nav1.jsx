import React from 'react'
import { Link } from 'react-router-dom'
import "../App.css"


function Nav1() {
    const links=[
        {path:"/",title:"Home"},
        {path:"/chair",title:"Chair"},
        {path:"/table",title:"Table"},
        {path:"/shelve",title:"Shelve"},
        {path:"/lambs",title:"Lambs"},
        {path:"/sofas",title:"Sofas"}
    ]
    
  return (
    <div className='navTop'>
      {links.map((el)=>(
        <div>
            <Link className='linkData' to={el.path}>{el.title}</Link>
        </div>
      ))}
    </div>
  )
}


export default Nav1
