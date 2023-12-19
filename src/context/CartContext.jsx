import { createContext, useEffect, useState } from "react";


export const CartContext = createContext();

const CarritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartContextProvider =({children}) => {
    const [cartItems, setCartItems] = useState([]);
    const [totalCartItems, setTotalCartItems] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);


const addItem = (item, quantity) => {
    const index = cartItems.findIndex((product) => product.id === id);

    if (index !== -1) {
        const cartItemsCopy = [...cartItems];
        cartItemsCopy[index].quantity -= quantity;
        cartItemsCopy[index].subtotal = cartItemsCopy[index].quantity * cartItemsCopy[index].price;
        setCartItems(cartItemsCopy);
    }else{
        const newItem = {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
            subtotal: price * quantity,
        };
        setCartItems([...cartItems, newItem]);
    }
};

const removeItem = (id) => {
    const arrayFilter = cartItems.filter(item => item.id != id);
    setCartItems(arrayFilter);
}

const clearCartItems = () =>{
    setCartItems([]);
}

const handleTotal = () => {
    const total = cartItems.reduce( (acum, item) => acum + item.quantity, 0);
setTotalCartItems(total);
}

const handleTotalQuantity = () => {
    const total = cartItems.reduce( (acum, item) => acum + item.quantity, 0);
    setTotalQuantity(total);
} 

useEffect( () =>{
    handleTotal();
    handleTotalQuantity();
}, [cartItems])

return <CartContext.Provider value={{cartItems, 
    totalCartItems, 
    totalQuantity, 
    addItem, 
    clearCartItems}}>
        {children}
        </CartContext.Provider>
};