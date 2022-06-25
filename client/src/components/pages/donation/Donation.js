import React, { Component } from 'react'
import Fade from 'react-reveal'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import donation from  './img/donation.png'
import voluntario from './img/voluntario.png'

import './Donation.css'

class Donation extends Component {

    constructor() {
        super()
    }

    render() {

        return(
        
            <Fade clear duration={800}>

            <Container fluid className='donation'>
                
                <h1>Te necesitamos</h1>

                <Row className='justify-content-center'>

                    <Col md={8}>
                    
                        <h3>España conforma uno de los primeros países de la Comunidad Europea donde donde existe una gran tasa de abandono de Gatos y Perros</h3>

                        <p>Alrededor de 138.400 perros y gatos fueron abandonados o se perdieron en 2018 en España, una cifra muy parecida a la de 2017 <strong>(138.300 abandonados)</strong>, según las estimaciones elaboradas por la Fundación Affinity a partir de los animales recuperados por sociedades protectoras, ayuntamientos y consejos comarcales de España.</p>

                        <p>FuentelSaz del Campo es una pequeña población ubicada en Castilla la Mancha. En esta alberga varias colonias felinas las cuales se encuentran totalmente desprotegidas, tanto por falta de la Acaldia como de los propios vecinos que contemplan como mejor solución para controlar la sobrepoblación de gatos, privarles de alimentación, sin contar con ningun comedero para los gatos de esta zona y mucho menos con un control de castración medidas que deberían ser las indicadas para solucionar esta problematica.</p>
                     
                        <p style={{fontWeight: '600'}}>Nosotros somos un pequeño grupo que operamos de forma independiente para poder ayudar a nuestros amigos de cuatro patas a sobrevivir, buscarle un hogar y por consiguiente a tener una vida mejor.</p>
                    
                    </Col>

                </Row>

                <Row className='align-items-baseline justify-content-center text-align-center'>

                    <Col sm={12} md={6} style={{paddingLeft: '10%', marginBottom: '100px'}}>
                     
                        <img src={voluntario} alt='Make a donation'></img>

                        <Link to={'/map'} className='linkDonation' style={{ textDecoration: 'none', color: '#ffffff', fontSize: '1.5em',  marginLeft: '30%', background: 'rgba(131, 51, 138, 1)' }}>Hazte voluntario</Link>
                        
                    </Col>

                    <Col sm={12} md={6} style={{paddingLeft: '5%', marginBottom: '100px'}}>
                     
                       <img src={donation} alt='Make a donation'></img>

                       <Link to={'/donation/donationForm'} className='linkDonation  23' style={{ textDecoration: 'none', color: '#ffffff', fontSize: '1.5em', marginLeft: '30%', background: 'rgba(131, 51, 138, 1)' }}>Haz una donación</Link>
                     
                    </Col>

                </Row>

                <Row>

                    <Link to={'/'} style={{textDecoration: 'none', color: '#ffffff', marginLeft: '10%'}} className='button'>Volver</Link>
               
                </Row>

            </Container>

            </Fade>
        )
    }
}


export default Donation