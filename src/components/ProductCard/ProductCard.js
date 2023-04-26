import React from "react";
import { BsSuitHeart, BsCurrencyEuro } from 'react-icons/bs';
import './ProductCard.css';

export default function ProductCard(props) {
    return (
        // <div className="product-card-container">
            <div className="product-card">
                <div className="product-card-image-container">
                    <BsSuitHeart className="heart-icon"/>
                    <img src={props.image} className="product-card-image" alt={props.title} />
                </div>
                <p className="product-title product-info">{props.title}</p>
                <p className="product-category product-info">{props.category.charAt(0).toUpperCase() + props.category.substring(1)}</p>
                <p className="product-price product-info">{props.price}<BsCurrencyEuro size={12} /></p>
            </div>
        // </div>
    )
}
 