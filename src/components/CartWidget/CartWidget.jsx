import { BsFillCartFill } from "react-icons/bs";

export const CartWidget = () => {
    return (
        <div className="d-flex">
        <BsFillCartFill size={25}/>
        <strong>0</strong>
        </div>
    )
}