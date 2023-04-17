import './Header.css';
import { AiOutlineShoppingCart } from 'react-icons/ai';


export default function Header() {
    return (
        <div className='header-container'>
            <h1 className='header-title'>Fake Store</h1>
            <div className='header-cart-container'>
                <AiOutlineShoppingCart size={35} className='header-icon-cart' />
                <div className='header-icon-number'>1</div>
            </div>
        </div>
    )
}