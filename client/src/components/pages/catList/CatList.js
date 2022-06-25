import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'


import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


import catsService from '../../../service/cats.service'
import CatCard from './CatCard'
import SearchBar from './searchBar/SearchBar'

import { Link } from 'react-router-dom'

import './CatList.css'



class CatList extends Component {

   constructor() {
       super()
       this.state = {
           cats: []
        }
        this.catsService = new catsService()
    }

   
    componentDidMount = () => this.loadCats()



    loadCats() {
        this.catsService
            .getCats()
            .then(response => this.setState({ cats: response.data}))
            .catch(error => console.log('Error', error))
    }

    filterCats = (sexValue) => {

        (sexValue.length > 1) ? this.setState({ cats: this.state.cats.filter(elm => elm.gender.toLowerCase() === (sexValue.toLowerCase())) }) : this.loadCats()
    
    }

    filterCatAge = (ageValue) => {

        (ageValue.length > 0) ? this.setState({ cats: this.state.cats.filter(elm => elm.age === ageValue) }) : this.loadCats()
    
    }

    render() {
      
        return(
          <>
        
          <Fade clear duration={800}>

            <Container>

                <section className='index'>

                    <h1>Lista de gatos en adopción</h1> 
        
                    <SearchBar filterMethod={this.filterCats} filterMethodAge={this.filterCatAge} />
                        
                 <Row className='list'>

                    {this.state.cats.map(elm => <CatCard key={elm._id} {...elm} />)}

                 </Row>
                
                 </section>
            
            </Container>                

          </Fade>
        
        </>
       
       )
    }
}

export default CatList