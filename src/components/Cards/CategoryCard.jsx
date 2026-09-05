import '../../styles/categories.css';
import arrow from '../../assets/icons/seta.svg'

import { useNavigate } from 'react-router-dom';

export default function CategoryCard({ image, title, onMouseEnter, onMouseLeave, category }) {

    const navigate = useNavigate();

    return (
        <div className="category-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={() => navigate(`/categoria/${category}`)}>
            <img src={image} alt={title} />

            <div className="category-overlay">
                <h3>{title}</h3>
                <img src={arrow} alt="seta" className="img-arrow"/>
                <span></span>
            </div>
        </div>
    )
}