import React, {useContext} from "react";
import { CartContext } from "../../contexts/CartContext";
import './Checkout.css';
import {RiDeleteBin6Line} from 'react-icons/ri';

export default function Checkout() {
    return (
        <div className="homepage-container">
            <div className="checkout-container">
                <div className="checkout-titles">
                    <h1>Item</h1>
                    <h1>Price</h1>
                    <h1>Quantity</h1>
                    <h1>Remove</h1>
                </div>
                <div>
                    <RiDeleteBin6Line />
                </div>

            </div>
        </div>
    )

    // return (
    //     <div>
    //       <h1>Shopping Cart</h1>
    //       <div>
    //         <h2>Products</h2>
    //         {products.map((product) => (
    //           <Product key={product.id} product={product} onAddToCart={addToCart} />
    //         ))}
    //       </div>
    //       <div>
    //         <Cart items={cartItems} onRemoveFromCart={removeFromCart} />
    //       </div>
    //     </div>
    //   );
}