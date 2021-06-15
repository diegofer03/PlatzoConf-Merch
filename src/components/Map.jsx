import React from 'react';
import {GoogleMap, LoadScript, Marker, useJsApiLoader} from '@react-google-maps/api'

const Map = ({address}) => {
    const mapStyles = {
      height: "50vh",
      width: "100%"
    }
  
    const defaultCenter = {
      lat: address.lat, lng: address.lng
    }
  
    return (
      <LoadScript googleMapsApiKey='AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={17}
          center={defaultCenter}
        >
          <Marker position={defaultCenter} />
        </GoogleMap>
      </LoadScript>
    );
  }

export default Map;