import React, { useContext } from "react";
import { BsFillSuitHeartFill } from 'react-icons/bs';
import './ProductCard.css';
import {CartContext} from "../../contexts/CartContext";

export default function ProductCard(props) {

    const [productDetails, setProductDetails] = React.useState();
    const {addToCart} = React.useContext(CartContext);

    return (
            <div className="product-card">
                <div className="product-card-image-container">
                    <BsFillSuitHeartFill className="heart-icon"
                    onClick={() => addToCart(props)} />
                    <img src={props.image} className="product-card-image" alt={props.title} />
                </div>
                <p className="product-title product-info">{props.title}</p>
                <p className="product-category product-info">{props.category.charAt(0).toUpperCase() + props.category.substring(1)}</p>
                <p className="product-price product-info">{props.price} €</p>
            </div>
    )
}
 