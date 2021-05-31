import React from 'react'
import './Formulario.css'

const Formulario = props =>{



    return(
        <form className = ''>
            <label className = 'form-label' >Digite seu nome</label>
            <input className = 'form-control' type = 'text' placeholder = 'Digite seu Nome'/>
            <input className = 'form-control' type = 'text' placeholder = 'Digite seu Email'/>
        </form>
    )
}

export default Formulario