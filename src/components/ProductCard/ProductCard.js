import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsFillSuitHeartFill } from 'react-icons/bs';
import './ProductCard.css';
import {CartContext} from "../../contexts/CartContext";

export default function ProductCard(props) {

    const {addToCart, removeFromCart, cartProducts} = useContext(CartContext);

    return (
        <div className="product-card">
                <div className="product-card-image-container">
                    {!cartProducts?.find(item => item.id === props.id) ?
                    <BsFillSuitHeartFill className="heart-icon" onClick={() => addToCart(props)} />
                    :
                    <BsFillSuitHeartFill className="heart-icon heart-icon-clicked" onClick={() => removeFromCart(props)} />
                    }
                <Link to={`/details/${props.id}`}>
                    <img src={props.image} className="product-card-image" alt={props.title} />
                </Link>
                </div>
                <p className="product-title product-info">{props.title.split(' ').slice(0,5).join(' ')}</p>
                <p className="product-category product-info">{props.category.charAt(0).toUpperCase() + props.category.substring(1)}</p>
                <p className="product-price product-info">{props.price.toFixed(2)} €</p>
        </div>
    )
}
 