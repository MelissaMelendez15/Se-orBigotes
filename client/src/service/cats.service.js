import axios from 'axios'

export default class CatsService {

    constructor() {
        this.api = axios.create({
            baseURL: 'http://localhost:5000/api',

        })
    }

    getCats = () => this.api.get('/getAllCats')
    getOneCat = id => this.api.get(`/getOneCat/${id}`)
    newCat = cat => this.api.post('/newCat', cat)
    editCat = (id, cat) => this.api.put(`/editCat/${id}`, cat)
    deleteCat = (id) => this.api.post(`/${id}/delete`)
}