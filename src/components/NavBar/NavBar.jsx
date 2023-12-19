import { Link } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
    return (
    <nav className="d-flex justify-content-around align-items-center">
        <h1>SPORT PAGE</h1>
        <div>
        <Link to="/">
            <button className="btn btn-outline-dark mx-2">Home</button>
        </Link>
        <Link to="/categoria/calzados">
            <button className="btn btn-outline-dark mx-2">Calzados</button>
        </Link>
        <Link to="/categoria/ropa">
            <button className="btn btn-outline-dark mx-2">Ropa</button>
        </Link>
        </div>
        <Link to="/cart">
        <CartWidget />
        </Link>
    </nav>
    );
};

