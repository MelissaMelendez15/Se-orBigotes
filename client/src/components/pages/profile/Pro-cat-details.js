import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CatService from '../../../service/cats.service'
import FileService from '../../../service/files.service'
import Alert from '../../shared/alert/Alert'

import './Pro-cat-details.css'


class ProCatDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            cat: {
                name: '',
                age: '',
                race:'',
                gender: '',
                description: '',
                imageUrl: '',
                owner: this.props.loggedInUser ? this.props.loggedInUser._id : ''

            },
            uploadingImg: false,
            showToast: false
        }

        this.catService = new CatService()

        this.fileService = new FileService()
    }

    handleInputChange = e => {

        const { name, value } = e.target

        this.setState({ cat: { ...this.state.cat, [name]: value } })
    }

    handleToast = showToast => this.setState({ showToast })

    handleFormSubmit = e => {

        e.preventDefault()

        this.catService
            .editCat(this.props.match.params.cat_id, this.state.cat)
            .then(() => this.props.history.push('/profile'))
            .catch(error => console.log('Error!', error))
    }
    
    handleDelete = e => {

        e.preventDefault()

        this.catService
            .deleteCat(this.props.match.params.cat_id)
            .then(() => this.props.history.push('/profile'))
            .catch(error => console.log('Error!', error))
    }

    handleImageUpload = e => {

        this.setState({ uploadingImage: true })

        const uploadData = new FormData()

        uploadData.append('imageUrl', e.target.files[0])

        this.filesService
            .uploadImage(uploadData)
            .then((response) => this.setState({ 
                cat: { ...this.state.cat, imageUrl: response.data.secure_url },
                uploadingImage: null
            }))
            .catch(error => console.log('Error!', error))
    }

    componentDidMount = () => {
        this.catService
        .getOneCat(this.props.match.params.cat_id)
        .then(response => this.setState(response.data))
        .catch(error => console.log('Error!', error))
    }

    render() {

        return(

            <Container fluid>

                <Fade clear duration={2000}>

                    <h1 style={{ marginLeft: '5%'}}>{this.state.name}</h1>
                
                </Fade>

                <Row className='align-intems-start justify-content-center'>

                    <Col md={3}>

                        <Fade clear duration={2000}>
                           
                           <img className='catPhoto' src={this.state.imageUrl} alt='cat image'/>

                        </Fade>
                    
                    </Col>

                    <Col sm={12} md={7}>

                        <Fade clear duration={2000}>

                            <form onSubmit={this.handleFormSubmit} className='pro-details-form'>

                                <label>Nombre</label>
                                <input type='text' placeholder={this.state.name} name='name' onChange={this.handleInputChange} /> <br></br>

                                <label>Años</label>
                                <input type='number' placeholder={this.state.age} name='age' onChange={this.handleInputChange} /> <br></br>

                                <label>Raza</label>
                                <input type='text' placeholder={this.state.race} name='race' onChange={this.handleInputChange} /> <br></br>

                                <label>Descripción</label>
                                <input type='text' placeholder={this.state.description} name='description' onChange={this.handleInputChange} /> <br></br>

                                <select select name='gender' onChange={this.handleInputChange}>

                                    <option value= ''>Sexo</option>

                                    <option value= 'macho'>Macho</option>

                                    <option value= 'hembra'>Hembra</option>

                                </select>

                                <br></br>

                                <label>Seleccionar Imagen</label>
                                
                                <input type='file' name='imageUrl' onChange={this.handleImageUpload} />

                                <button className='button' type='submit' style={{color:'#ffffff'}} disabled={this.state.uploadingImg}>{this.state.uploadingImg ? 'Modificando...' : 'Modificar'}</button>

                            </form>

                            <div>

                                <button onClick={this.handleDelete} className='buttonDelete button' onClick={() => { this.handleToast(true) }}>Borrar</button>
                                
                                {this.state.showToast && <Alert title=''text='Se ha eliminado un gato de tu lista'/>}
                            
                            </div>


                        </Fade>
                    
                    
                    </Col>

                </Row>
                
            </Container>

        )
    }
}

export default ProCatDetails