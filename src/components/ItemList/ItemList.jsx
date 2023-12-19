import { Item } from "../Item/Item"


export const ItemList = ({products}) => {
    return (
        <>
        <div className="d-flex flex-wrap justify-content-center align-items-center">
            {products.map (product => <Item key={product.id} {...product}/>)}
        </div>
        </>
    )
}