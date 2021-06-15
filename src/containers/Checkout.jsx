import React, { useContext } from 'react';
import '../styles/components/Checkout.css'
import {Link} from 'react-router-dom'
import AppContext from '../context/AppContext';

const Checkout = () => {
    const {state :{cart},removeFromCart} = useContext(AppContext)

    const handleRemove = product => () => {
        removeFromCart(product)
    }

    const handlePlusTotal = () => {
        const reducer = (accumulator,currentValue) => accumulator + currentValue.price
        const plus = cart.reduce(reducer,0)
        return plus;
    }

    return (
        <div className="Checkout">
            <div className="Checkout-content">

                {cart.length > 0 ? <h3>Lista</h3> : <h3>Sin Pedidos</h3>}
                {cart.map((item)=>(
                    <div className="Checkout-item" key={item.cartId}>
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                        <button type='button' onClick={handleRemove(item.cartId)}>
                            <i className="fas fa-trash-alt" title='Eliminar'></i>
                        </button>
                    </div>
                ))}
            </div>
            {cart.length>0&&(
                <div className="Checkout-sidebar">
                    <h3>{`Precio total: ${handlePlusTotal()}`}</h3>
                    <Link to='/checkout/info'>
                        <button type='button'>Continuar pedido</button>
                    </Link>              
                </div>
            )}
            
        </div>
    );
}

export default Checkout;