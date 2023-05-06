import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from '../images/logo.png'
import { links } from '../data'

const Navbar = () => {
    return (
        <nav>
            <div className="container nav__container">
                <Link to='/' className='logo'>
                    <img src={Logo} alt="nav logo" />
                </Link>

                <ul className="nav__links">
                    {
                        links.map(({ name, path }, index) => {
                            return (
                                <li>
                                    <NavLink to={path}>{name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>

                
            </div>
        </nav>
    )
}

export default Navbar