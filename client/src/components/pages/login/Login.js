import React, { Component } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import AuthService from '../../../service/auth.service'


import './Login.css'

import logo from '../../layout/navbar/cat.png'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            message: undefined
        }
        this.authService = new AuthService()
    }

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleFormSubmit = e => {
        
        e.preventDefault()
        
        if (this.state.username.length > 0 && this.state.password.length > 0) {

        this.authService
            .login(this.state)
            .then(response => {
                
                this.setState({ message: response })
                this.props.setTheUser(response.data)
                
               this.props.closeModal()
            })
            .catch(err => console.log('Erroooor', { err }))
    }
    else {
        if (this.state.username.length < 1 && this.state.password.length < 1) {
            let value = 'campos vacios'
            this.setState({ message: value})
        }
        else if (this.state.username.length < 1) {
            let value = 'introduce el username'
            this.setState({ message: value })
        } else {
            let value = 'introduce la contraseña'
            this.setState({ message: value })
        }
    }
}
  
    render() {

      return(
        
        <>

            <Container>
                    
                    <main>
                        
                        <img className='logi' src={logo} alt='logi' />
                        
                        <Row className="justify-content-center">
                            
                            <Col md={{ span: 5 }}>
                                
                                <h1 className="ptitle">Login</h1>
                                
                                <Form onSubmit={this.handleFormSubmit} className="formu">
                                    
                                    <Form.Group>
                                        <Form.Label>Usuario</Form.Label>
                                        <Form.Control type="text" name="username" value={this.state.username} onChange={this.handleInputChange}/>
                                    </Form.Group>

                                  
                                    <Form.Group>
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                                    </Form.Group>
                                    
                                    <div className="justify-content-center">
                                    
                                        <Button variant="dark" type="submit">Llevame adentro</Button>
                                    
                                    </div>

                                </Form>
                            
                            </Col>
                        
                        </Row>
                    
                    </main>
                
                </Container>
            </>

      )
    }

    
}


export default Login