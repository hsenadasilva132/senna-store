import { GoArrowUpRight } from 'react-icons/go';
import "../../styles/trendCard.css"

import { useNavigate } from 'react-router-dom';

function TrendCard({ name, image, id }) {

    const navigate = useNavigate();


    return (
        <article className="trend-card" onClick={() => navigate(`/product/${id}`)}>

             <img
                src={image}
                alt={name}
                className='trend-image'
            />
            
            <button className="trend-arrow">
                <GoArrowUpRight />
            </button>

            <div className="trend-info">
                <h3>{name}</h3>
            </div>

            
       </article>
    )
}

export default TrendCard;