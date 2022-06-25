import React from 'react'
import { Link } from 'react-router-dom'

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

import './CatCard.css'


const CatCard = ( {_id, name,  imageUrl}) => {

    return(
        
        <Col lg={4}>

          <div className='cat-div'>
           
            <img className='catPhoto' src={imageUrl} alt="cat" style={{height: '300px', width: '350px', objectFit: 'cover',  borderRadius: '15px'}} />
                 
            <Link to={`/catList/${_id}`} className='link' style={{textDecoration:'none', color: '#ffffff'}}><h4>{name}</h4>s</Link>

           </div>
               
        </Col>
           
    )
}







export default CatCard