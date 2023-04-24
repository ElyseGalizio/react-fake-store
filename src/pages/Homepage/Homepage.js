import React from "react";
import axios from "axios";
import './Homepage.css';
import ProductCard from "../../components/ProductCard/ProductCard";


//add filter functionality to buttons
// onClick, filter for product categories
// make api dynamic, so that clicking on a certain button calls a certain category

export default function Homepage() {
    const [products, setProducts] = React.useState([]);
    const [filterProductsValue, setFilterProductsValue] = React.useState('all-products');

    React.useEffect(() => {
        fetchProducts();
    }, [])

    const fetchProducts = () => {
        axios.get('https://fakestoreapi.com/products')
            .then(response => setProducts(response.data))
    }

    const fetchFilterProducts = () => {
        axios.get(`https://fakestoreapi.com/products/category/${products.category}`)
            .then(response => setFilterProductsValue(response.data))
    }

    function filterProducts(products, filterQuery) {
        if (filterQuery === 'electronics') {
            return fetchFilterProducts(products.filter(item => item.category === 'electronics'))
        } else if (filterQuery === 'jewelry') {
            return console.log(products.filter(item => item.category === 'jewelry'))
        } else if (filterQuery === 'mens-clothing') {
            return console.log(products.filter(item => item.category === 'mens-clothing'))
        } else if (filterQuery === 'womens-clothing') {
            return console.log(products.filter(item => item.category === 'womens-clothing'))
        } else if (filterQuery === 'all-products') {
            return products
        }
    }

    return (
        <div className="homepage-container">
            <div>
                <button onClick={() => setFilterProductsValue('all-products')} value='all-products'>All</button>
                <button onClick={(event) => setFilterProductsValue(event.target.value)} value='electronics'>Electronics</button>
                <button onClick={() => setFilterProductsValue('jewelry')} value='jewelry'>Jewelry</button>
                <button onClick={() => setFilterProductsValue('mens-clothing')} value='mens-clothing'>Men's Clothing</button>
                <button onClick={() => setFilterProductsValue('womens-clothing')} value='womens-clothing'>Women's Clothing</button>
            </div>
            <div className="homepage-product-container">
                {filterProducts(products, filterProductsValue)?.map(product => <ProductCard key={product.id} {...product} />)}
            </div>
        </div>
    )
}