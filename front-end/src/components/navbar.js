import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({links}) => {
  return (
    <div>
        <ul className ="nav nav-tabs bg-dark">
            {links.map(link => 
            <li key ={link.path} className="nav-item">
                <Link className="nav-link " to ={link.path}>{link.title}</Link>
            </li>)}
        </ul>
    </div>
  )
}
