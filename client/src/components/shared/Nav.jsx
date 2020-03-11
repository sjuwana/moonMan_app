import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
    <nav>
        <NavLink to='/items'>Items Here</NavLink>
        <NavLink to='/create'>Create Item</NavLink>
    </nav>
)

export default Nav