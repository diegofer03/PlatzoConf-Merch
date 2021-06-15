import React, { useContext } from 'react';
import Map from '../components/Map';
import AppContext from '../context/AppContext';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css'

const Success = () => {
    const {state:{buyer}} = useContext(AppContext)

    const address = useGoogleAddress(buyer[0].address);

    return (
        <div className="Success">
            <div className="Success-content">
                <h2>{`${buyer.name}, Gracias por su compra`}</h2>
                <span>Gracias por gastar su plata no le van a enviar nada</span>
                <div className="Success-map">
                    
                </div>
            </div>
            <Map address={address} />
        </div>
    );
}

export default Success;