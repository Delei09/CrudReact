import React, { useState } from 'react'
import './Formulario.css'
import axios from 'axios'

const dadosInicial = {
        nome : '' ,
        email : ''
}

const Formulario = props =>{

    const [ form , setForm ] = useState(dadosInicial)

    function input(e){
        const {name , value} = e.target 
        setForm({...form , [name] : value})
        console.log(form)
    }
    function salvar(e){
        e.preventDefault();
        console.log(form)
    }



    return(
        <form className = 'container' onSubmit = {salvar}>
            <input name = 'nome' className = 'form-control' type = 'text'
             placeholder = 'Digite seu Nome' onChange = {input}/>
            <input name = 'email' className = 'form-control' type = 'text'
             placeholder = 'Digite seu Email' onChange = {input}/>
            <button  className = 'btn btn-primary '>Salvar</button>
        </form>
    )
}
export default Formulario