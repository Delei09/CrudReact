import React from 'react'
import Formulario from './Formulario'
import './Main.css'

const Main = (props) => {
    return(
        <main className="main">
            <h2>Meu primeiro Crud feito com React</h2>
            <Formulario />
        </main>
    )
}

export default Main