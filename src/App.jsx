import { Cart, Form, ItemDetailContainer, ItemListContainer } from "./components";
import { FirebaseContextProvider } from "./context/FirebaseContext";
import { CartContextProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const App = () => {
    return (
                    <CartContextProvider>
                    <Cart/>
                <FirebaseContextProvider>
                    <ItemListContainer/>
            <BrowserRouter>
                    <Form/>
                    <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:category" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    </Routes>
            </BrowserRouter>
                </FirebaseContextProvider>
                </CartContextProvider>
    );
};


