// import della parte di componenti di navigazione per routing
import { Link, NavLink } from "react-router-dom";

// dati menù
const links = [
    { path: '/', label: 'Home' },
    { path: '/contacts', label: 'Contacts' },
    { path: '/about', label: 'About' }
]


const MainNavBar = () => {
    return (
        <nav>
            <ul>
                {links.map(link => (
                    <li>
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                ))}
                {/* <li>
                    <Link to="/">Home Page</Link>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts">Contacts</NavLink>
                </li> */}
            </ul>
        </nav>
    )
}

export default MainNavBar