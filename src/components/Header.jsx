import React, { useContext } from 'react';
import '../styles/components/Header.css'
import {Link} from 'react-router-dom'
import AppContext from '../context/AppContext';

const Header = () => {
    const {state:{cart}} = useContext(AppContext)
    return (
        <div className="Header">
            <h1>
                <Link to='/'>
                    PlatziConf Merch
                </Link>
            </h1>
            <div className="Header-checkout">
                <Link to='/checkout'>
                    <i className="fas fa-shopping-basket" title='checkout'></i>
                </Link>
                {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
            </div>
        </div>
    );
}

export default Header;