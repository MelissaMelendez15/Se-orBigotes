import React, { Component } from 'react';
import { Link  } from 'react-router-dom';

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Cat from './cat.png'

import authService from '../../../service/auth.service';
import Login from '../../pages/login/Login'

import './Navbar.css'

import Modal from 'react-bootstrap/Modal'
 

class Navigation extends Component {
    constructor(props) {
      super(props)
      this.state = {
        showModal: false
      }
      this.authService = new authService()
    
    }
    
    logoutUser = () => {
      this.authService
          .logout()
          .then(() => this.props.setTheUser(null))
          .catch(err => console.log('Error:', err))
    }

    handleModal = showModal => this.setState({ showModal })


    render() {
        
        return(
            
            <>
             
             <Navbar collapseOnSelect expand="lg"  className='navigation'>
 
                <Navbar.Brand href="/"><Link to='/'><img alt="logotipo" src={Cat} className='logoNav'style={{color: '#ffffff'}} /></Link></Navbar.Brand>
   
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse id="responsive-navbar-nav">
      
                  <Nav className="mr-auto">
                    
                    <Link className='navlink' style={{textDecoration: 'none', color: '#ffffff'}} to="/catList">Adopta</Link>
                    <Link className='navlink' style={{textDecoration:'none', color: '#ffffff'}} to="/donation">Ayuda</Link>
                    <Link className='navlink' style={{textDecoration:'none', color: '#ffffff'}} to="/map">Mapa</Link>
                    {/* <Link className='navlink' style={{textDecoration:'none', color: '#ffffff'}} to="/date">Datos</Link> */}
                    {!this.props.loggedInUser && <Link className='navlink' style={{textDecoration:'none', color: '#ffffff'}} to="/signup">Registro</Link>}
                    {!this.props.loggedInUser && <div className='navlink' onClick={() => this.handleModal(true)}  style={{marginBottom: '20px'}} variant="dark" size="sm">Login</div>}
                    {this.props.loggedInUser &&<Link className='navlink' style={{textDecoration:'none', color: '#ffffff'}} to="/profile">Perfil</Link>}
                    {this.props.loggedInUser &&<div className='navlink' style={{textDecoration:'none', color: '#ffffff'}} onClick={this.logoutUser}>Cerrar sesión</div>}
       
                  </Nav>
               
               </Navbar.Collapse>
            
            </Navbar>

            <Modal size='lg' show={this.state.showModal} onHide={() => this.handleModal(false)}>
               
               <Modal.Header closeButton></Modal.Header>

               <Modal.Body>
                  
                  <Login setTheUser={this.props.setTheUser} loggedInUser={this.props.loggedInUser}  closeModal={() => this.handleModal(false)}/>
             
               </Modal.Body>  
            
            </Modal>
            
            </>
        )    
        
    }

}

export default Navigation

