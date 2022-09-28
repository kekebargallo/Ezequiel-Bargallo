import { useState } from "react";
import { CartContext } from "./cartContext";

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const isInCart = id => (cart.some(item => item.id === id));

    const addItem = (item, quantity) => {
      if(isInCart(item.id)){
        alert('Ya está en el carrito');
      }else{
        setCart([...cart, {...item, quantity, purchasePrice: item.price * quantity}]);
      }
      console.log(cart);
    };

    const removeItem = id => {
      let newCart = cart.filter(item => item.id !== id);
      setCart(newCart);
    }

    const clearCart = () => {
      setCart([]);
    }

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider;