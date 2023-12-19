import { Box } from "@mui/material";
import { useContext, useEffect } from "react";
import { Spinner } from "reactstrap";
import { FirebaseContext } from "../../context/FirebaseContext";
import { Item } from "../Item/Item";


export const ItemListContainer = () => {
    const {products, isLoading, getProductsDB, getProductsById, product} = useContext(FirebaseContext);

    useEffect(() => {
        const fetchData = async () => {
            await getProductsDB();
            await getProductById("");
            console.log(product);
        };
        fetchData();
    }, [getProductsDB, getProductById, product]);
    

    return (
        <>
        <Box component="div" display="flex" flexWrap="wrap">
            {isLoading ? <><Spinner/><h2> Loading... </h2></> : products.map((product) =>(
                <Item key={product.id} {...product}/>
            ))}
        </Box>
        </>
    );
};

