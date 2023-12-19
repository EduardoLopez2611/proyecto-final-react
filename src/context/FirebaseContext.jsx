import { addDoc, collection, doc, getDoc, getDocs, query, serverTimestamp, updateDoc, where } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";


export const FirebaseContext = createContext(null);

export const FirebaseContextProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() =>{
        const category= doc(db, "products", category)

        const productsDB = collection(db, "products");
        const q = category ? query(productsDB, where("category", "==", category)) : productsDB;

        const getProductsDB = (category) => {
        const myProducts= category
        ? query(collection(db, "products"), where("category", "==", category))
        : query(collection(db, "products"));
        getDocs(myProducts)
        .then((resp) => {
            if(resp.size === 0) {
                console.log("No hay stock de productos en la base de datos");
            }
            const productList = resp.docs.map((doc) =>({id: doc.id, ...doc.data()}));
            setProducts(productList);
            setIsLoading(false);
        })
        .catch((error) =>{
            console.error("Error getting products", error);
        });
    };
    const getProductById = (id) => {
        const productRef = doc(db, "products", id);
        getDoc(productRef)
        .then(resp => {
            if (resp.exists()){
                const prod = {
                    id: resp.id,
                    ...resp.data()
                }
                setProduct(prod);
            }
        })
    }

    const discountStock = async(product) => {
        productRef = doc(db, "products", product.id);
        const newStock = product.stock - 1;
        await updateDoc(productRef, {stock: newStock});
    }
    const addOrderDB = async (cartProducts, userData, total) => {
        const newOrder = {
            buyer: userData,
            items: cartProducts,
            data: serverTimestamp(),
            total
        }
        const newDoc = await addDoc(collection(db, "orders"), newOrder);
        console.log(newDoc.id)
    }
    const objectValue = {
        products,
        product,
        isLoading,
        getProductById,
        getProductsDB,
        discountStock,
        addOrderDB
    };
    return <FirebaseContext.Provider value={objectValue}>{children}</FirebaseContext.Provider>
});
}
