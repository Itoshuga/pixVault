
import { Link } from 'react-router-dom';
import './GalleryBanner.css';

const GalleryBanner = ({image, title}) => {

    return (
        <section id="banner" className="section-m1">
            <h4>Pix Vault</h4>
            <h2>Nos <span>Collections</span> d'Images</h2>
            <Link to="/gallery" className="button">Galerie</Link>
        </section>
    );
};

export default GalleryBanner;