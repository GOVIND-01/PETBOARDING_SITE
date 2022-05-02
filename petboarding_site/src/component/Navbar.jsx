import { Link } from "react-router-dom";
import { Home } from "./Home";
import { CreatePage } from "./CreatePage";
import "./Navbar.css"
export const Navbar = () => {
    return (
        <div className="Navbar">
            <Link to="/" className="navbarLink">Home</Link>
            <Link to="/listing/create" className="navbarLink">Create Page</Link>
        </div>
    )
}