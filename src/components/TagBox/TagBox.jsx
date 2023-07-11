
import { Link } from 'react-router-dom';
import './TagBox.css';

const TagBox = ({image, title}) => {

    return (
        <div className="tag-box">
            <img src={image} alt="" />
            <h6>{title}</h6>
        </div>
    );
};

export default TagBox;