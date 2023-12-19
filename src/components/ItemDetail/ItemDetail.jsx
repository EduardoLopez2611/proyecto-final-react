import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({ name, description, img, price, stock}) =>{
    const onAdd = (item) => {
        alert (`${item} have been added to cart.`)
    }
    return (
        <div className="border m-2"> 
            <div className="card d-flex justify-content-center"> 
                <div className="card-body">
                    <h4 className="card-title text-dark">{name}</h4> 
                    <img src={img} alt="This clothing belongs to Sportpage" />
                    <p className="card-text">{description}</p>
                    <p>${price}</p>
                    <ItemCount stock={stock} onAdd ={onAdd} />
                </div>
            </div>
        </div>
    );
};