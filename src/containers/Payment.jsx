import React, { useContext } from 'react';
import '../styles/components/Payment.css'
import AppContext from '../context/AppContext'
import {PayPalButton} from 'react-paypal-button-v2'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

//AIzaSyDKgl0eeWxGSOa1PXFa9qx9C_ZdqkFeOTs = googlemaps api key
const Payment = () => {
    const {state:{cart,buyer}, addOrder} = useContext(AppContext)
    const history = useHistory();

    const paypalOptions = {
        clientid:'ARG3qIJxyxsmEmkLW7AbhtQif9RtIO4nlsweVQeGcYYIUOvmFhpTVFncLyOZkMgDXUhh_6oXYBTq7PlH',
        intent: 'capture',
        currency: 'USD'
    }

    const buttonStyle = {
        layout: 'vertical',
        shape: 'rect'
    }

    const handlePlusTotal = () => {
        const reducer = (accumulator,currentValue) => accumulator + currentValue.price
        const plus = cart.reduce(reducer,0)
        return plus;
    }

    const handlePaymentSuccess = (data) => {
        console.log('de totis: '+data)
        if(data.status === 'COMPLETE'){
            const order = {//nueva orden para integrar al estado
                buyer,
                product: cart,
                payment: data
            }
            //funcion para agregar a donde se necesite
            addOrder(order)
            history.push('/checkout/success')
        }
    }

    return (
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen de su mierda</h3>
                {cart.map((item)=>(
                    <div className="Payment-item" key={item.id}>
                        <div className="Payment-element">
                            <h4>{item.title} </h4>
                            <span>$ {item.price} </span>
                        </div>
                    </div>
                ))}
                <div className="Payment-button">
                    <PayPalButton 
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyle}
                        amount={handlePlusTotal()}
                        onStart={()=>console.log('pague puta')}
                        onSuccess={data=>handlePaymentSuccess(data)}
                        onError={err=>console.log('no tiene plata en esa mierda: '+err)}
                        onCancel={data=>console.log('cagado: '+data)}
                    />
                </div>
                <Link to='/checkout/success'>
                    <div>
                        pedido exitoso
                    </div>
                </Link>
            </div>
            <div/>
        </div>
    );
}

export default Payment;