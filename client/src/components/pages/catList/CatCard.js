import React from 'react'
import { Link } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './CatCard.css'


const CatCard = ( {_id, name,  imageUrl}) => {

    return(
        
        <Col md={4} className='cat-card'>

            <img className='catPhoto' src={imageUrl} alt="cat" />
         
           <Row className='justify-content-start'>

              <Col sm={9} md={8}>

                  <div className='cat-div'>

                  <h3>{name}</h3>
                  
                  <Link to={`/catList/${_id}`} className='link' style={{textDecoration:'none', color: '#ffffff'}}>Ver detalles</Link>

                  </div>
               
               </Col>
           
           </Row>
        
        </Col>
    )
}







export default CatCard