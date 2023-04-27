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
        <div>
            <h1>Product Details</h1>
        </div>
    )
}