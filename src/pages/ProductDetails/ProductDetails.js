import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

export default function ProductDetails () {
    const { id } = useParams();
    const [productDetails, setProductDetails] = React.useState();

    function fetchProducts() {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response => setProductDetails(response.data))
    }

    React.useEffect(() => {
        fetchProducts()
    });

    return(
        <div className='homepage-container'>
            <div className='product-details-container'>
                <img src={productDetails?.image} className='product-details-image' alt={productDetails?.title} />
                <div className='product-details'>
                    <h2 className='product-details-title'>{productDetails?.title}</h2>
                    <p className='product-details-price'>{productDetails?.price} €</p>
                    <h3>Description</h3>
                    <p className='product-details-description'>{productDetails?.description}</p>
                    <button className='product-details-button'>Add to Cart</button>
                </div>
            </div>
            
        </div>
    )
}