import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Fade from 'react-reveal/Fade'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Modal from 'react-bootstrap/Modal'

import catsService from '../../../service/cats.service'

import NewCat from './newCat/NewCat'
import perfil from './perfil.png'
import ProCatCard from './Pro-cat-card'

import cat from './cat.png'

import  './Profile.css'



class Profile extends Component {

      constructor(props) {
           super(props)
           this.state = {
               cats: [],
               user: undefined,
               showModal: false,
               showList: false,
           }
           this.catsService = new catsService()
      }

      componentDidMount = () => this.loadCats()

      loadCats() {

        this.catsService
            .getCats()
            .then(response => { this.setState({ cats: response.data }) })
            .catch(error => console.log('Error!', error))
      }

      handleformUser() {
          if (this.props.loggedInUser) {
              if (this.props.loggedInUser.username)
                 return true
              else
                return false
        }
      }

     handleModal = showModal => this.setState({ showModal })

        catfilter() {
            let aux = this.state.cats.filter(elm => elm.owner === this.props.loggedInUser._id)
            if (this.state.showList === true) {
                this.state.showList = false
                document.getElementById('paragraph').setAttribute('style', 'display:block')
            } else {
                this.state.showList = true
                this.setState({ cats: aux })
                document.getElementById('paragraph').setAttribute('style', 'display:none')
            }
        }


    render() {

        return(

            <>
             
             <Fade clear delay={600}>

                 <Container fluid style={{paddingLeft: '5%'}} className='main'>

                     <h1 className='profile'>Perfil</h1>
                
                {this.handleformUser() === true && <Container fluid>
                    
                    <Row style={{ textAlign: 'left'}}> 
                       
                       <Col>

                       {this.props.loggedInUser.imageUrl && <img className='logo-perfil' src={this.props.loggedInUser.imageUrl} alt='perfil' />}

                       <h2>¡Bienvenido {this.props.loggedInUser.username}!</h2>

                       <p>Eres el administrador de {this.props.loggedInUser.associationName}</p>

                       <p>Eres miembro desde el {this.props.loggedInUser.createdAt.slice(0, 10)}</p>

                       <p>La última actualización de tu perfil: {this.props.loggedInUser.updatedAt.slice(0, 10)}</p>

                       </Col>
                    
                    </Row>
                    
                   
                    <Row className='justify-content-start'>

                      <Col>

                        <h3>Lista de Gatos añadidos por ti</h3>

                       <button onClick={() => this.handleModal(true)} className='listaBtn'>Nuevo gato</button>

                       <button onClick={() => { this.catfilter() }} className='listaBtn'>Lista de gatos</button>

                       <p id='paragraph' style={{display: 'none'}}>Aún no has agregado ningun gato en tu lista de adopciones, ¡añade uno!</p>

                       <Row className='justify-content-around'>

                           {this.state.showList && <>
                           
                              {this.state.cats.map(elm => <ProCatCard key={elm._id} {...elm}/>)}
                           
                           </>}

                       </Row>

                       <Modal size='lg' show={this.state.showModal} onHide={() => this.handleModal(false)}>
                 
                           <Modal.Header closeButton>
                   
                               <img src={cat} alt='logo' className='catLogo' />
                  
                              <p className='catLogoP'>Señ@r Bigotes</p>
                
                         </Modal.Header>
               
                         <Modal.Body>
                     
                            <NewCat { ...this.props} closeModal={() => this.handleModal(false)} />
                 
                        </Modal.Body>
      
                      </Modal>
                      
                     </Col>
                    
                    </Row>
                
                </Container>}

                {this.handleformUser() === false && <Container fluid>

                  <Row style={{ textAlign: 'left' }}>

                      <Col>
                      
                        <img className="logo-perfil" src={perfil} alt='perfil'/>

                        <h2>Bienvenido {this.props.loggedInUser.username}</h2>

                        <p>Te uniste el {this.props.loggedInUser.createdAt.slice(0, 10)}</p>

                        <p>Última actualización de tu perfil: {this.props.loggedInUser.updatedAt.slice(0, 10)}</p>
                      
                     </Col>
                 
                  </Row>
                
               </Container>}

            </Container>

            </Fade>

           
            
            </>
        )
    }
}







export default Profile