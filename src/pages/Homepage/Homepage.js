import React from "react";
import axios from "axios";
import "./Homepage.css";
import ProductCard from "../../components/ProductCard/ProductCard";

//add filter functionality to buttons
// onClick, filter for product categories
// make api dynamic, so that clicking on a certain button calls a certain category

export default function Homepage() {
  const [products, setProducts] = React.useState([]);
  // const [filterProductsValue, setFilterProductsValue] = React.useState('all-products');

  React.useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data));
  };

  // const fetchFilterProducts = () => {
  //     axios.get(`https://fakestoreapi.com/products/category/${products.category}`)
  //         .then(response => console.log(response.data))
  // }

  // STEP 3: setup the if statements for all of the different categories. The current
  // if statement should be correct. Now just built out the others
  // function filterProducts(products, filterQuery) {
  //     if (filterQuery === 'electronics') {
  //         return console.log(products.filter(item => item.category === 'electronics'))
  //     }
  // }

  return (
    <div className="homepage-container">
      {/* STEP 1: When the user clicks on any of these buttons store
            this value  in the filterProductsValue state */}
      <div>
        <button value="all-products">All</button>
        <button value="electronics">Electronics</button>
        <button value="jewelry">Jewelry</button>
        <button value="mens-clothing">Men's Clothing</button>
        <button value="womens-clothing">Women's Clothing</button>
      </div>
      <div className="homepage-product-container">
        {/* STEP 2:  
                remove the word products and replace with  filterProducts function call passing through products and filterProductsValue */}
        {products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}
