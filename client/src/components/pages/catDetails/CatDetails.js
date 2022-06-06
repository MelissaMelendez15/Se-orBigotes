import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

import { Link } from 'react-router-dom'

import catService from '../../../service/cats.service'
import ContactForm from './contactForm/ContactForm'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'
import Alert from '../../shared/alert/Alert'

import cat from './img/cat.png'
import left from './img/left.png'

import  './CatDetails.css'


class CatDetails extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            showModal: false,
            showToast: false,
            cat: ''
        }
        this.catService = new catService()
    }

    componentDidMount = () => {

        this.catService
             .getOneCat(this.props.match.params.cat_id)
             .then(response => this.setState({ cat: response.data}))
             .catch(error => console.log('Error', error))

    }

    handleModal = showModal => this.setState({ showModal })

    hadleToast = showToast => this.setState({ showToast })


    endContact = () => {

        this.handleModal(false)
        this.hadleToast(true)
    
    }

    render() {

        return(
            
            <Container fluid>
                    
            <Fade clear duration={2000}>

                <h1 style={{ marginLeft: '5%' }}>{this.state.cat.name}</h1>
                
            </Fade>

            <Row className='align-items-center justify-content-center' style={{marginBottom: '50px'}}>

                <Col md={3}>
                    
                    <Fade clear duration={2000}>
                    
                        <img className='catPhoto' src={this.state.cat.imageUrl} alt='cat' />
                        
                    </Fade>

                </Col>

                <Col md={10}>
                    
                    <Fade clear duration={2000}>

                    <article>

                        <p>Edad: {this.state.cat.age} </p>

                        <p>Sexo: {this.state.cat.gender}</p>

                        <p>Raza: {this.state.cat.race}</p>

                        <p style={{marginBottom: '40px', width: '60%'}}>Cómo soy: {this.state.cat.description}</p>

                        <button onClick={() => this.handleModal(true)} className='details-link'>¡Adóptame!</button>
                        
                    </article>
                        
                    </Fade>

                    <Modal size='lg' show={this.state.showModal} onHide={() => this.handleModal(false)}>
                       
                        <Modal.Header closeButton>
                            
                            <img src={cat} alt='logo' className='catLogo' />
                            
                            <p className='catLogoP'>Señ@r Bigotes</p>
                        
                        </Modal.Header>

                        <Modal.Body>
    
                            <ContactForm setTheUser={this.props.setTheUser} loggedInUser={this.props.loggedInUser} {...this.props} closeModal={() => this.endContact()}/>
                       
                        </Modal.Body>
                    
                    </Modal>
               
                </Col>

                {this.state.showToast && <Alert title='Mensaje enviado' text='En breve nos pondremos en contancto con usted. Atentamente, ¡Señ@r Bigotes!'/>}

            </Row>

        </Container>
        
        )
    }
}







export default CatDetails