import React from "react";
import { BsSuitHeart } from 'react-icons/bs';
import './ProductCard.css';

export default function ProductCard(props) {
    return (
        <div className="product-card-container">
            <div className="product-card">
                <BsSuitHeart />
                <div className="product-card-image-container">
                    <img src={props.image} className="product-card-image" />
                </div>
                <p>{props.title}</p>
                <p>{props.price}</p>
                <p>{props.category}</p>
            </div>
        </div>
    )
}