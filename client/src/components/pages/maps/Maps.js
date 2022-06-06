import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'  

import Styles from './Styles';

import './Maps.css'

class Maps extends Component {
    
    state = {myMarkers: [
        
        {latitude: 41.0742,  longitude: -1.83063},   
        {latitude: 41.07290, longitude: -1.82863}]
        
    }
        
        displayMarkers = () => { 
            
            return this.state.myMarkers.map((mark, index) => 
            
            {                
                
              return <Marker id={index} position={{ lat: mark.latitude, lng: mark.longitude }} 
            
              onClick={() => console.log("You clicked me!",{index})} />})
        }

    render() {
        const {google} = this.props
        return(
            
            <div style={{
                position: "relative",
                width: "100%",
                height: "1100px"}} 
                className="map">
               
                <Map google={this.props.google} 
                zoom={14}
                styles={this.props.mapStyles}
                icon={
                    {
                    url:"https://graffica.info/wp-content/uploads/2020/02/nuevo-icono-de-google-maps.jpg",
                    anchor: new google.maps.Point(32,32),
                    scaledSize: new google.maps.Size(40,48)
                    }
                }
                initialCenter={{ lat: 41.0742, lng: -1.83063}}
                disableDefaultUI= {true}>
                {this.displayMarkers()}</Map>
               
             </div>
        )
    }
}


export default GoogleApiWrapper({
    apiKey: ('AIzaSyC3KggrfflqAhhsDsU8jxxUOizGNqD14YM&libraries=places')
  })(Maps)
  






























// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
// class Maps extends Component {
//   static defaultProps = {
//     center: {
//       lat: 41.07290, 
//       lng: -1.82863
//     },
//     zoom: 15,
//   };
 
//   render() {
//     return (
     
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           bootstrapURLKeys={{ key: 'AIzaSyC3KggrfflqAhhsDsU8jxxUOizGNqD14YM&libraries=places' }}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
         
//         >
        
//         <AnyReactComponent
//             lat={41.07290}
//             lng={-1.82863}
//             text="Señor Bigotes"
//             icon="señorI"
            
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }
 
// export default Maps;








