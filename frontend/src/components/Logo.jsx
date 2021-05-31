import React from 'react'
import {FaUser} from 'react-icons/fa'
import './Logo.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const Logo = props => {
    return(
        <div className="logo">
            <FaUser className= "logoImg"/>
        </div>
    )
}

export default Logo