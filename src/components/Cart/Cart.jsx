import {Box, Button, Typography} from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export const Cart = () => {
    const {cartItems, totalCartItems, removeItem} = useContext(CartContext);
    console.log(cartItems)

    return(
        <Box marginTop={4}>
            <Typography fontSize={25}>Cart</Typography>
            <Box display="flex" flexDirection="column">
                {cartItems.map((item) => (
                    <Box
                        key={item.id}
                        margin={2}
                        border={2}
                        borderColor={"#ffc800"}
                        borderRadius={2}
                        padding={3}
                        width={380}
                        boxShadow={3}
                    >
                    <Typography>Name: {item.name} </Typography>
                    <Typography>Unit price: ${item.price} </Typography>
                    <Typography>Quantity: {item.quantity} </Typography>
                    <Typography>Subtotal: ${item.subTotal} </Typography>
                    <Button variant="contained" color="error" onClick={() => removeItem(item.id)} >
                    Delete
                    </Button>
                    </Box>
                ))}
            </Box>
            <Typography>Cart total sum ${totalCartItems}</Typography>
        </Box>
    )
}