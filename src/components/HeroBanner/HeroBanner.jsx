
import { Link } from 'react-router-dom';
import './HeroBanner.css';

const HeroBanner = () => {

    return (
        <section id="hero">
            <h4>Galerie d'Image</h4>
            <h2>Publication et</h2>
            <h1>Partage d'Image</h1>
            <p>PixVault vous permet de publier des images dans des collections.</p>
            <Link to="/">Publier</Link>
        </section>
    );
};

export default HeroBanner;