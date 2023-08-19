import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Googlemap = () => {
    const mapStyles = {        
        height: "100vh",
        width: "100%"};
      
      const defaultCenter = {
        lat: 22.3039, lng: 70.8022
      }
  return (
    <div>
     <LoadScript
       googleMapsApiKey='AIzaSyA2DSQWdb9Yr3pAsIgy6JP7UAN3WodZepI'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
    </div>
  )
}
export default Googlemap
