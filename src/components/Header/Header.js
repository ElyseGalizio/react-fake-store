import './Header.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from 'react';
import {CartContext} from '../../contexts/CartContext';
import { Link } from 'react-router-dom';


export default function Header() {

    const { cartProducts } = useContext(CartContext);

    return (
        <div className='header-container'>
            <Link to={'/'}>
                <h1 className='header-title'>Fake Store</h1>
            </Link>
            <Link to={'/checkout'}>
                <div className='header-cart-container'>
                    <AiOutlineShoppingCart size={40} className='header-icon-cart' />
                    <div className='header-icon-number'>{cartProducts?.length || 0}</div>
                </div>
            </Link>
        </div>
    )
}