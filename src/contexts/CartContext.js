import React, { createContext } from 'react';

export const CartContext = createContext();

function CartProvider(props) {

    const [cartProducts, setCartProducts] = React.useState();

    React.useEffect(() => {
        let cartProductsArray = JSON.parse(localStorage.getItem('cartProductsArray'));
        setCartProducts(cartProductsArray);
    }, []);
    
    const addToCart = (productToBeAdded) => {
        let cartProductsArray = JSON.parse(localStorage.getItem('cartProductsArray'));
        if(!cartProductsArray) {
            cartProductsArray = [productToBeAdded];
        } else {
            cartProductsArray = [...cartProductsArray, productToBeAdded]
        }
        localStorage.setItem("cartProductsArray", JSON.stringify(cartProductsArray));
        setCartProducts(cartProductsArray);
    }

    const removeFromCart = (productToBeDeleted) => {

        let cartProductsArray = JSON.parse(localStorage.getItem('cartProductsArray'));
            cartProductsArray = cartProductsArray.filter((product) => product.id !== productToBeDeleted.id);

        localStorage.setItem("cartProductsArray", JSON.stringify(cartProductsArray));
        setCartProducts(cartProductsArray);
    }

    const checkoutEmptyCart = () => {
        localStorage.setItem("cartProductsArray", JSON.stringify([]));
        setCartProducts([]);
    }

    return(
        <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart, checkoutEmptyCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;

