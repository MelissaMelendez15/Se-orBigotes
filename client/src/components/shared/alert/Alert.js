import React, { Component } from 'react'

import Toast from 'react-bootstrap/Toast'

import cat from './cat.png'

import './Alert.css'

class Alert extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visible: true
        }
    }


    render() {

        return(

            <Toast style={{ position: 'fixed', left: '10px', bottom: '50px', width: '300px' }} onClose={() => this.setState({ visible: false})} show={this.state.visible} delay={3000} autohide className='toast'>
               
                <Toast.Header>
                    
                    <img
                      src={cat}
                      alt="logoGato"
                      style={{ width: '30px' }}
                    />
                    
                     <p className="mr-auto">{this.props.title}</p>
                         
                </Toast.Header>
                        
                <Toast.Body>{this.props.text}</Toast.Body>
                      
            </Toast>
                  
                  
        );
    }

}



export default Alert