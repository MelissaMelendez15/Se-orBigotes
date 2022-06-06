import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import Fade from 'react-reveal'

import CatService from '../../../../service/cats.service'
import FileService from '../../../../service/files.service'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Alert from '../../../shared/alert/Alert'
import Spinner from '../../../shared/spinner/Spinner'

import './NewCat.css'

class NewCat extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cat: {
                name: '',
                age: '',
                race: '',
                gender: '',
                description: '',
                imageUrl: '',
                owner: this.props.loggedInUser ? this.props.loggedInUser._id : ''
            },
            uploadingImg: false,
            showToast: false,
            showModal: false
        }

        this.catService = new CatService()

        this.fileService = new FileService()
    }

    handleInputChange = e => {

        const { name, value} = e.target

        this.setState({ cat: { ...this.state.cat, [name]: value } })
        
    }

    handleFormSubmit = e => {

        e.preventDefault()

        this.catService
            .newCat(this.state.cat)
            .then(() => {
                this.props.closeModal()
                this.props.history.push('/profile')
            })
            .catch(error => console.log('Error!', error))
        
            this.setState({ showToast: true })
    }

   handleImageUpload = e => {

    const uploadData = new FormData()

    uploadData.append('imageUrl', e.target.files[0])

    this.fileService
        .uploadImage(uploadData)
        .then(response => this.setState({
            cat: { ...this.state.cat, imageUrl: response.data.secure_url },
            uploadingImg: null
        }))
        .catch(error => console.log('Error!', error))
   }
    
    
render() {

        return(

            <>

            <Fade clear duration={800}>

                <Container>

                    <Row>

                        <h1 style={{textAlign: 'center', marginTop: 0}}>Añade un nuevo Gato a tu lista de adopciones</h1>
                    </Row>

                    <Row className='formulary'>

                    <form onSubmit={this.handleFormSubmit}>

                    <label>Nombre</label>
                    <input type='text' placeholder='Nombre' name='name' onChange={this.handleInputChange} />


                    <label>Años</label>
                    <input type='number' placeholder='Años' name='age' onChange={this.handleInputChange} /> <br />

                  
                  <label>Raza</label>
                  <input type='text' placeholder='Raza' name='race' onChange={this.handleInputChange}/> <br />

                  <label>descripción:</label>
                  <input type='text'  name='description' placeholder='Descripción' value={this.state.cat.description} onChange={this.handleInputChange}/> <br />

                <select select name='gender' onChange={this.handleInputChange}>

                    <option value=''>Sexo</option>

                    <option value='Macho'>Macho</option>

                    <option value='Hembra'>Hembra</option>

                </select>

                <br></br>

                <label>Selecionar Imagen {this.state.uploadingImg && <Spinner />}</label>
                <input type='file' name='imageUrl' onChange={this.handleImageUpload}/> <br />

                <br></br>

                    <button type='submit' disable={this.state.uploadingImg}>{this.state.uploadingImg ? 'Subiendo...' : 'Crear Gato'}</button>

                </form>
            
            </Row>

            {this.state.showToast && <Alert title='' text='¡Felicidades, has añadido un gatito a tu lista de adopciones' />}
       
        </Container>

        </Fade>
    </>
        )
    }

}







export default NewCat