import React from 'react'
import './Nav.css'
import Logo from './Logo'

const Nav = () => {
    return(
        <nav className="nav">
            <Logo />   
            <a href = '#'>Inicio</a>
            <a href = '#'>Opção</a> 
        </nav>
    )
}

export default Nav