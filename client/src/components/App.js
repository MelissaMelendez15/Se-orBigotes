import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Navigation from './layout/navbar/Navbar'
import Index from './pages/index/Index'
import CatList from './pages/catList/CatList';
import CatDetails from './pages/catDetails/CatDetails';
import Donation from './pages/donation/Donation';
import DonationForm from './pages/donation/DonationForm'
import Maps from './pages/maps/Maps'
import Profile from './pages/profile/Profile'
import ProCatDetails from './pages/profile/Pro-cat-details'
import Footer from './layout/footer/Footer'
import SignUp from './pages/signUp/SignUp';
import Login from './pages/login/Login';

import Alert from './shared/alert/Alert'

import authService from '../service/auth.service';

import './App.css';



class App extends Component {
   
   constructor() {
      super()
      this.state = {
         loggedInUser: undefined
      }

      this.authService = new authService()
   }
   
   componentDidMount = () => this.fetchUser()
   
   setTheUser = user => this.setState({ loggedInUser: user}, () => console.log('El usuario es', this.state.loggedInUser))
   
   
   fetchUser = () => {
      this.authService
          .isLoggedIn()
          .then(response => this.setState({ loggedInUser: response.data}))
          .catch(err => this.setState({ loggedInUser: null }))
   }
   
   render() {
    
      return (
      <>
        
        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} />

        <Switch>

            <Route path="/" exact render={() => <Index />} />
            <Route path="/catList" exact render={props => <CatList  {...props}/>} />
            <Route path="/catList/:cat_id" render={props => <CatDetails loggedInUser={this.state.loggedInUser} {...props} />} />
            <Route path="/donation" exact render={() => <Donation  />} />
            <Route path="/donation/donationForm" render={() => <DonationForm />} />
            <Route path="/map" render={() => <Maps/>} />
            <Route path="/profile" exact  render={() => <Profile loggedInUser={this.state.loggedInUser}/>} />
            <Route path="/profile/profile-catList/:cat_id"  render={props => this.state.loggedInUser ? <ProCatDetails loggedInUser={this.state.loggedInUser} {...props} /> : <Redirect to='/login'/>} />
            <Route path="/signup" exact render={props => <SignUp setTheUser={this.setTheUser} {...props} />} />
            <Route path="/login"  render={props => <Login setTheUser={this.setTheUser} {...props}/>} />
        
        </Switch>
        
        <Alert title='¡Bienvenido a Señ@r Bigotes!' text=''/>
      
       <Footer />
    
     </>
    )
   }
    
  
}

export default App;
