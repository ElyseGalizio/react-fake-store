import React from "react";
import axios from "axios";
import "./Homepage.css";
import ProductCard from "../../components/ProductCard/ProductCard";


// style homepage: fix product cards to grow with text
// finish making product details page responsive with media queries
// fix responsiveness of contact page
// begin week 4 

export default function Homepage() {
    const [products, setProducts] = React.useState([]);
    const [filterProductsValue, setFilterProductsValue] = React.useState('all-products');

    React.useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((response) => setProducts(response.data));
    };

    // const fetchFilterProducts = (filterQuery) => {
    //     axios.get(`https://fakestoreapi.com/products/category/${filterQuery}`)
    //         .then(response => setProducts(response.data))
    // }

    // function filterProducts(products, filterQuery) {
    //     if (filterQuery === 'electronics') {
    //         return products.filter((item) => item.category === 'electronics')
    //     } else if (filterQuery === 'jewelery') {
    //         return products.filter((item) => item.category === 'jewelery')
    //     } else if (filterQuery === "men's clothing") {
    //         return products.filter((item) => item.category === "men's clothing")
    //     } else if (filterQuery === "women's clothing") {
    //         return products.filter((item) => item.category === "women's clothing")
    //     } else if (filterQuery === 'all-products') {
    //         return products
    //     }
    // }
    // STEP 3: setup the if statements for all of the different categories. The current
    // if statement should be correct. Now just built out the others


    return (
        <div className="homepage-container">
            <div className="button-container">
                {/* STEP 1: When the user clicks on any of these buttons store
            this value  in the filterProductsValue state */}
                <button className="homepage-button" onClick={() => setFilterProductsValue('all-products')} value='all-products'>All</button>
                <button className="homepage-button" onClick={() => setFilterProductsValue('electronics')} value='electronics'>Electronics</button>
                <button className="homepage-button" onClick={() => setFilterProductsValue('jewelery')} value='jewelery'>Jewelery</button>
                <button className="homepage-button" onClick={() => setFilterProductsValue("men's clothing")} value="men's clothing">Men's Clothing</button>
                <button className="homepage-button" onClick={() => setFilterProductsValue("women's clothing")} value="women's clothing">Women's Clothing</button>
            </div>
            <div className="homepage-product-container">
                {/* STEP 2:  
                remove the word products and replace with  filterProducts function call passing through products and filterProductsValue */}
                {products?.filter((item) =>
                    filterProductsValue !== 'all-products' ? item.category === filterProductsValue : item)
                    .map(product => <ProductCard key={product.id} {...product} />)}
            </div>
        </div>
    )
}
