import { Link } from 'react-router-dom';
import './Footer.css';
import { BsSuitHeartFill } from 'react-icons/bs';

export default function Footer() {
    return (
        <div className="footer-container">
            <p>Made with <BsSuitHeartFill size={13} /> by mimo</p>
            <Link to='/contact-us' className='footer-link'>Contact Us</Link>
        </div>
    )
}