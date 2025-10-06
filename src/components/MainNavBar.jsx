// import della parte di componenti di navigazione per routing
import { Link, NavLink } from "react-router-dom";



const MainNavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">Contacts</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default MainNavBar