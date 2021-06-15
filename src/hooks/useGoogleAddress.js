import { useEffect, useState } from "react";
import axios from 'axios'

const useGoogleAddress = (address) => {
    console.log(address)
    const [map ,setMap] = useState({})
    const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCmjvkXB_DMnBUNwxQztLMStyQmA_szbNw`

    useEffect (async () => {
        const data = await axios.get(API)
        console.log(data)
        setMap(data.data.results[0].geometry.location) //lo que viene de la api **revisar**
    },[])

    return (
        map
    );
}

export default useGoogleAddress;