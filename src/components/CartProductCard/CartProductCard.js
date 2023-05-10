import React, {useContext} from "react";
import { CartContext } from "../../contexts/CartContext";
import {RiDeleteBin6Line} from 'react-icons/ri';
import './CartProductCard.css';

export default function CartProductCard(props) {

    const {removeFromCart, cartProducts} = useContext(CartContext);

    return (
        <div>
            {cartProducts?.find(item => item.id === props.id) ?
                <div className="cart-product-card">
                    <img src={props.image} alt={props.title} className="cart-product-card-image" />
                <div className="cart-product-card-title">
                <p>{props.title} </p>
                </div>
                <p className="cart-product-price-quantity">{props.price} €</p>
                <p className="cart-product-price-quantity">1</p>
                <RiDeleteBin6Line size={30} className="remove-icon" onClick={() => removeFromCart(props)} />
                </div>
                :
                <h1>Your cart is empty</h1>
            }

        </div>
    )
}