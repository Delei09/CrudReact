import React, { useEffect, useState } from 'react'
import './Formulario.css'
import axios from 'axios'
import {AiFillMinusCircle , AiOutlineEdit}  from 'react-icons/ai'

const dadosInicial = {
        nome : '' ,
        email : ''
}


const Formulario = props =>{

    const [ form , setForm ] = useState(dadosInicial)
    const [ lista , setLista] = useState([])
    const [use , setUse] = useState(0)

    useEffect( () => {
        axios.get('http://localhost:3003/users')
            .then(resp => resp.data)
            .then(dados => setLista(dados))
    } , [use])

    function input(e){
        const {name , value} = e.target 
        setForm({...form , [name] : value})
    }
    function salvar(e){
        e.preventDefault();
        axios.post('http://localhost:3003/users' , form)
        setUse(use + 1)
    }
    function deletar(id){
        axios.delete(`http://localhost:3003/users/${id}`)
        const listaAtualizada =  lista.filter(usuario => {
            return usuario.id !== id
            }
        )
            setLista(listaAtualizada)
    }
    function tabelaCorpo (){
        return( 
            lista.map( usuario => {
              return ( <tbody>
                    <tr>
                        <td> {usuario.id} </td>
                        <td> {usuario.nome} </td>
                        <td> {usuario.email} </td>
                        <td> <button onClick = { e => deletar(usuario.id)} className = ' btn btn-outline-danger' > <AiFillMinusCircle /> </button>  </td>
                        <td>  <button className = ' btn btn-outline-warning ' > <AiOutlineEdit /> </button></td>
                    </tr>
                </tbody>)
            })
            
        )
    }


    return(
        <>
        <form className = 'container' type = 'submit' onSubmit = {salvar}>
            <input name = 'nome' className = 'form-control' type = 'text'
             placeholder = 'Digite seu Nome' onChange = {input}/>
            <input name = 'email' className = 'form-control' type = 'text'
             placeholder = 'Digite seu Email' onChange = {input}/>
            <button className = 'btn btn-primary '>Salvar</button>
        </form>
        <table className = 'table'>
            <thead>
                <tr>
                    <th> ID</th>
                    <th> Nome</th>
                    <th> Email</th>
                    <th> Excluir</th>
                    <th> Editar</th>
                </tr>
            </thead>
            {tabelaCorpo()}

        </table>
        </>
    )
}
export default Formulario