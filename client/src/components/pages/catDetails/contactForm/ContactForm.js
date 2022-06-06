import React, { Component } from 'react'
import axios from 'axios'

import CatService from '../../../../service/cats.service'
import UserService from '../../../../service/users.service'

import './ContactForm.css'


class ContactForm extends Component {
      
    constructor(props) {
        super(props)
        this.state ={
            user: this.props.loggedInUser ? this.props.loggedInUser._id : '',
            cat: {},
            owner: {},
        }

        this.catService = new CatService()
       
        this.userService = new UserService()
    }

    componentDidMount = () => {

        this.catService
            .getOneCat(this.props.match.params.cat_id)
            .then(response => this.setState({ cat: response.data }))
            .catch(error => console.log('Error!', error))
    }

    getOwner = () => {

        this.userService
            .getOneUser(this.state.cat.owner)
            .then(response => this.setState({ owner: response.data }))
            .catch(error => console.log('Error!', error))
    }


    handleFormSubmit = async(e) => {

        e.preventDefault()

        const name = document.getElementById('name').value
        const emailUser = document.getElementById('emailUser').value
        const emailOwner = document.getElementById('emailOwner').value
        const subject = document.getElementById('subject').value
        const message = document.getElementById('message').value


        const form = await axios.post('http://localhost:5000/api/sendEmail', {
            name,
            emailUser,
            emailOwner,
            subject,
            message
        })
         
        this.endFormSubmit()

    }

    endFormSubmit() {

        this.props.closeModal()
    }

    resetForm() {

        document.getElementById('contact-form').reset()
    }

    

    render() {

        return(
        
            <>
            
            <form onSubmit={this.handleFormSubmit} id='contact-form' method='POST'>

                <label for='name'>Nombre</label>
                <input type='text' id='name' placeholder='Tu nombre'></input>

                <label for='emailUser'>De</label>
                <input type='email' id='emailUser' value={this.state.user.email}/> <br />

                <label for='emailOwner'>Para</label>
                <input type='email' id='emailOwner' value={this.state.owner.email}/> <br />

                <label for='subject'>Asunto</label>
                <input type='text' id='subject' value={this.state.cat.name}/> <br />

                <label for='message'>Mensaje:</label>
                <textarea id='message' placeholder='Hola, Somos la cooperativa FuentelSaz salva un felino. Cuentanos si estas interesad@ en adoptar a un gatito y nos pondres lo antes posible en contacto contigo. Ellos te esperan ;)'></textarea> <br />

                <button type='submit'>Enviar correo</button>

            </form>
            
            </>
        )
    }
}


export default ContactForm