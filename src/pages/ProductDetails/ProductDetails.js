import React from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { CartContext } from '../../contexts/CartContext';

export default function ProductDetails () {
    const { id } = useParams();
    const [productDetails, setProductDetails] = React.useState();
    const {addToCart, removeFromCart, cartProducts} = React.useContext(CartContext);

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
                    {!cartProducts?.find(item => item.id === productDetails?.id) ? 
                    <button className='product-details-button' onClick={() => addToCart(productDetails)}>Add to Cart</button>
                    :
                    <button className='product-details-button' onClick={() => removeFromCart(productDetails)}>Remove from Cart</button>
                }
                </div>
            </div>
            
        </div>
    )
}