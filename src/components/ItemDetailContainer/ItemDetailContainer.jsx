import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import {doc, getDoc} from "firebase/firestore";
import { db } from "../../config/firebaseConfig";



export const ItemDetailContainer = () =>{
    const { id } = useParams;
    const [item, setItem] = useState(null);
    useEffect (() => {
        const docRef = doc(db, "products", id);
        getDoc(docRef)
        .then((resp) =>{
            setItem(
                {...resp.data(), id: resp.id}
            )
                })
    }, [id]);
    return(
        <>
        {item && <ItemDetail {...item}/>}
        </>
    )
} 