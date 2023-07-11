
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';
import './Header.css';

import { HiOutlineShoppingBag } from "react-icons/hi";


const Header = () => {

    return (
        <section id="header">
            <Link to="/"><img src={logo} alt="" /></Link>
            <div>
                <ul id="navbar">
                    <li><Link className="active" to="/">Accueil</Link></li>
                    <li><Link to="/gallery">Galerie</Link></li>
                    <li><Link to="/about">A Propos</Link></li>
                    <li><Link to="/shop">Boutique</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/cart"><HiOutlineShoppingBag/></Link></li>
                </ul>
            </div>
        </section>
    );
};

export default Header;