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
}