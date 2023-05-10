import React, {useContext} from "react";
import { CartContext } from "../../contexts/CartContext";
import Modal from 'react-modal';
import './Checkout.css';
import CartProductCard from "../../components/CartProductCard/CartProductCard";
import { Link } from "react-router-dom";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      width: '65%',
      height: '536px',
      transform: 'translate(-50%, -50%)',
    },
  };

export default function Checkout() {

    const {cartProducts, checkoutEmptyCart} = useContext(CartContext);
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
      }

      function closeModal() {
        setIsOpen(false);
        checkoutEmptyCart();
      }

    return (
        <div className="homepage-container">
            <div className="checkout-container">
                {cartProducts?.length ? 
                <>
                <div className="checkout-container-header">
                    <h1 className="checkout-h1 checkout-item">Item</h1>
                    <div className="checkout-blank-div"></div>
                    <h1 className="checkout-h1 checkout-price">Price</h1>
                    <h1 className="checkout-h1">Quantity</h1> 
                    <h1 className="checkout-h1 check-out-remove">Remove</h1>
                </div>
                    {cartProducts?.map(product => 
                    <CartProductCard key={product.id} {...product} />)}
                <div className="checkout-total">
                    <h1>Total</h1>
                    <h1>{cartProducts?.reduce((acc, curr) => acc + curr.price, 0)} €
                    </h1>
                </div>
                    <button className="checkout-button" onClick={openModal}>Checkout</button>
                    <Modal 
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        style={customStyles}
                        contentLabel="Example Modal">
                        <div className="modal-text-container">
                        <p className="checkout-modal-text">Your order was successful!</p>
                        <p className="checkout-modal-text">Check your email for the order confirmation. Thank you for shopping with Fake Store!</p>
                    <Link to='/'>
                    <button onClick={closeModal} className="modal-button">Return to Main Page</button>
                    </Link>
                    </div>
                    </Modal>
                    </>
                    :
                    <h1 className="checkout-empty-cart-notice">There are no products in the cart.</h1>
                    }
            </div>
        </div>
    )
}
