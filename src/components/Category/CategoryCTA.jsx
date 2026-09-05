import '../../styles/categoryCTA.css';
import { useNavigate } from 'react-router-dom';

import Button from '../layout/button';



function CategoryCTA() {

    const navigate = useNavigate();

    const goCollection = () => {
        navigate("/shop");
    }

    return (
        <section className="category-cta">
            
            <div className='category-cta-overlay'></div>

            <div className="category-cta-content">
                <span>Continue explorando</span>

                <h2>Ainda existem muitos modelos esperando por você.</h2>

                <p>Descubra outros tênis da coleção e encontre o modelo
                    ideal para o seu estilo.    </p>
            </div>

            <Button
                text="Ver a coleção completa"
                onClick={goCollection}
            />
        </section>
    )
}

export default CategoryCTA;