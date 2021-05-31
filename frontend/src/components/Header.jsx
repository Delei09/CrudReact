import React from 'react'
import './Header.css'
import {FaHome, FaEdit} from 'react-icons/fa'

const Header = (props) => {

    function icone(props){
        if(props === 'FaHome') return <FaHome className = 'logoImg'/>
        else return <FaEdit className = 'logoImg'/>
    }
    return(
        <header className="header">
            {icone(props.icon)}
            <h2>{props.title}</h2>
        </header>
    )
}

export default Header