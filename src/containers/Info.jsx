import React, { useContext, useRef } from 'react';
import '../styles/components/Information.css'
import {Link,useHistory} from 'react-router-dom'
import AppContext from '../context/AppContext'

const Info = () => {
    const {state : {cart},addToBuyer} = useContext(AppContext)
    const form = useRef(null)
    const history = useHistory();

    const handleSubmit = () => {
        const formData = new FormData(form.current)
        const buyer = {
            'name': formData.get('name'),
            'email':formData.get('email'),
            'address': formData.get('address'),
            'apto':formData.get('apto'),
            'city':formData.get('city'),
            'country':formData.get('country'),
            'state':formData.get('state'),
            'zp':formData.get('zp'),
            'phone':formData.get('phone')
        }
        addToBuyer(buyer);
        history.push('/checkout/payment')
        console.log(buyer)

    }
    return (
        <div className="Information">
            <div className="Information-content">
                <div className="Information-head">
                    <h2>Informcarion de contacto</h2>
                </div>
                <div className="Information-form">
                    <form ref={form}>
                        <input type='text' placeholder='Nombre Completo' name='name' />
                        <input type='text' placeholder='Email' name='email' />
                        <input type='text' placeholder='Direction' name='address' />
                        <input type='text' placeholder='Apto' name='apto' />
                        <input type='text' placeholder='Ciudad' name='city' />
                        <input type='text' placeholder='Pais' name='Country' />
                        <input type='text' placeholder='Estado' name='state' />
                        <input type='text' placeholder='Zip' name='zp' />
                        <input type='text' placeholder='Telefono' name='phone' />
                    </form>
                </div>
                <div className="Information-buttons">
                    <Link to='/checkout'>
                        <div className="Information-back">
                            Regresar
                        </div>
                    </Link>                   
                    <div className="Information-next">
                        <button type='button' onClick={handleSubmit}>
                            Pagardo
                        </button>                   
                    </div>
                </div>
            </div>
            <div className="Information-sidebar">
                <h3>Pedido</h3>
                {cart.map((item)=>(
                    <div className="Information-item" key={item.id}>
                        <div className="Information-element">
                            <h4>{item.id}</h4>
                            <span>{item.price}</span>
                        </div>
                    </div>
                ))}
                <div className="Information-item">
                    <div className="Information-element">
                        <h4>Yem name</h4>
                        <span>Es gratis</span>
                    </div>
                </div>
            </div>
        </div>
    
    );
    
}

export default Info;