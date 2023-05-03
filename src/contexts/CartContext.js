import React, { createContext, useContext } from 'react';

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
        console.log(productToBeDeleted)

        let cartProductsArray = JSON.parse(localStorage.getItem('cartProductsArray'));
        if(!cartProductsArray) {
            cartProductsArray = [productToBeDeleted];
        } else {
            cartProductsArray = cartProductsArray.filter((product) => product.id !== productToBeDeleted.id);
        }
        localStorage.setItem("cartProductsArray", JSON.stringify(cartProductsArray));
        setCartProducts(cartProductsArray);
    }

    return(
        <CartContext.Provider value={{ cartProducts, addToCart, removeFromCart }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;

// function AddRemoveButton() {
//     const [isInCart, setIsInCart] = useState(false);
//     const [cartProducts, setCartProducts] = React.useState();
  
//     const handleClick = () => {
//       if (isInCart) {
//         const removeFromCart = (productToBeDeleted) => {
//           let cartProductsArray = JSON.parse(localStorage.getItem('cartProductsArray'));
//           if(!cartProductsArray) {
//               cartProductsArray = [productToBeDeleted];
//           } else {
//               cartProductsArray = cartProductsArray.filter((product) => product.id !== productToBeDeleted.id);
//           }
//           localStorage.setItem("cartProductsArray", JSON.stringify(cartProductsArray));
//           setCartProducts(cartProductsArray);
//       }
  
//         setIsInCart(false);
//       } else {
//         const addToCart = (productToBeAdded) => {
//           let cartProductsArray = JSON.parse(localStorage.getItem('cartProductsArray'));
//           if(!cartProductsArray) {
//               cartProductsArray = [productToBeAdded];
//           } else {
//               cartProductsArray = [...cartProductsArray, productToBeAdded]
//           }
//           localStorage.setItem("cartProductsArray", JSON.stringify(cartProductsArray));
//           setCartProducts(cartProductsArray);
//       }
//         setIsInCart(true);
//       }
//     };
// return (
//     <button onClick={handleClick}>
//       {isInCart ? 'Remove from cart' : 'Add to cart'}
//     </button>
//   );
// }
  