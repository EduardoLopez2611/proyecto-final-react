import { Link } from "react-router-dom";

export const Item = ({id, name, img, price, description }) => {
    return (
    <div className="d-flex flex-wrap justify-content-center">
        <div className="border m-2">
            <div className="card ">
            <div className="card-body ">
                <h4 className="card-title">{name}</h4>
                <img src={img} alt="img-fluid m-4" />
                <p className="card-text"> {description} </p>
                <p className="card-price">${price}</p>
                <Link to={`/item/${id}`}>
                <button className="btn btn-outline-warning">Details</button>
                </Link>
            </div>
            </div>
        </div>
    </div>
    );
};