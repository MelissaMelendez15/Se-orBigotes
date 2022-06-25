import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Video from './Video'
import MyComponent from './Vivus'

import './Index.css'
import CatList from '../catList/CatList'



export default class Index extends Component {

    constructor() {
        super()
    }

    componentDidMount() {
       
        window.addEventListener('scroll', this.applyScrollEffects)
    
    }
    
    applyScrollEffects() {

        const isInViewport = el => {
            const rect = el.getBoundingClientRect()
            const vertInView = (rect.top <= window.innerHeight - window.innerHeight / 2) && ((rect.top + rect.height) >= 0)
            const horInView = (rect.left <= window.innerWidth) && ((rect.left + rect.width) >= 0)
            return (vertInView && horInView)
        }
    

         document.querySelectorAll('.color-background').forEach(elm => {
            if (isInViewport(elm)) {
                document.querySelector('.apartado2').classList.add('on')
            } else {
                document.querySelector('.apartado2').classList.remove('on')
            }
        })

       
    }


    render(){
        
        return (
        
        <>
            
            <Container className='apartado1'>
                 
                <Fade cascade>
                    
                    <Row>

                       <Col lg={12}>
                      
                         <Video />
                       
                       </Col>

                       <Col lg={12}>
                      
                         <p className='paragraph white'>¡Señor Big@tes!</p>
                       
                       </Col>
                  
                    </Row>
                </Fade>
            
            </Container>

            <Container fluid className='apartado2'>
               
                <Fade cascade>

                   <Row className='justify-content-center align-items-center'>

                       <Col md={5}>

                           <p style={{ width: '80%' }} className='color-background'>"Cuando me siento mal me basta con mirar a mis gatos y mi valor regresa. El más pequeño de los gatitos, es una verdadera obra de arte y cómo tal, hay que cuidarlos. 
                            Creo que los gatos son espíritus encarnados en la tierra. Un gato, estoy seguro, podría caminar sobre una nube sin atravesarla"<span style={{ marginTop: '20px', display: 'block'}}>Anónimo</span></p>
                       
                       </Col>


                       <Col md={2}>

                          <MyComponent />
                       
                       </Col>

                   </Row>
               
                </Fade>

            </Container>

        </>
        
        )
    }
}