import React from 'react'
import { Link } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './Pro-cat-card.css'

const ProCatCard = ({_id, name, imageUrl}) => {
    
    return (
  
        <Col md={4} className='Cat-card'>

            <img className='catPhoto' src={imageUrl} alt='cat' />
            
            <Row className='justify-content-start'>

                <Col md={8} >

                    <div className='catCard-div'>

                        <h3>{name}</h3>
                        
                        <Link to={`profile/profile-catList/${_id}`} className='link' style={{textDecoration:'none',  color:'white'}}>Ver detalles</Link>

                    </div>
                
                
                </Col>


            </Row>
        
        
        </Col>
    )
}




export default ProCatCard