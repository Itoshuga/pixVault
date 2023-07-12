
import { Link } from 'react-router-dom';
import './CollectionContainer.css';

import { FaRegStar, FaFireAlt } from "react-icons/fa";


const CollectionContainer = ({image, artistName, collectionName}) => {

    return (
        
        <div className="collection">
            <img src={image}/>
            <div className="des">
                <span>{artistName}</span>
                <h5>{collectionName}</h5>
                <div className="star">
                    <FaRegStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                    <FaRegStar/>
                </div>
                <h4>Free</h4>
            </div>
            <Link to="/"><FaFireAlt className="fire"/></Link>
        </div>
    );
};

export default CollectionContainer;