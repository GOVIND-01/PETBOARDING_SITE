import { Link } from "react-router-dom";
import { Home } from "./Home";
import { CreatePage } from "./CreatePage";
export const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/listing/create">Create Page</Link>
        </div>
    )
}