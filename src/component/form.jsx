import React from 'react'
import PropTypes from 'prop-types'

export default Formulario extends React.Component{
    constructor(props){
        super(Props);
        this.state = {
            placeholder : "ingrese un valor"
        }
    }
    this.handlerForm = e =>{
        e.preventDefault();

    }
    render(){
        return(
            <form>
                <input onChange={handlerForm(e)} />
            </form>
        )
    }
}