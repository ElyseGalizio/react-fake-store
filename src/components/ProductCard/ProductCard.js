import React from "react";
import { BsSuitHeart } from 'react-icons/bs';
import './ProductCard.css';

export default function ProductCard(props) {
    return (
        <div className="product-card-container">
            <div className="product-card">
                <BsSuitHeart />
                <h1>Product Card</h1>
                <p>{props.title}</p>
                <p>{props.price}</p>
                <p>{props.category}</p>
                <img src={props.image} className="product-card-image" />
            </div>
        </div>
    )
}