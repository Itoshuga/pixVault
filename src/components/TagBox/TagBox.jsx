
import { Link } from 'react-router-dom';
import './TagBox.css';

const TagBox = ({image, title}) => {

    return (
        <div className="tag-box">
            <h6>{title}</h6>
        </div>
    );
};

export default TagBox;