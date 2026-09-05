import '../../styles/comingSoon.css'

import { FiClock } from 'react-icons/fi';
import Button from '../layout/button'

import { useNavigate } from 'react-router-dom';


function ComingSoon({ title = "Em breve" }) {
    
    const navigate = useNavigate();

    const clickBack = () => {
        navigate(-1);
    }

    return (
        <div className='coming-soon-container'>
            <div className="coming-soon">
                <div className="coming-soon-icon">
                    <FiClock />
                </div>

                <span>EM DESENVOLVIMENTO</span>

                <h3>{title}</h3>
                <p>
                    Estamos preparando essa funcionalidade
                    para uma próxima atualização.
                </p>

                <Button text="Voltar" onClick={clickBack} />
            </div>
        </div>
    );
}

export default ComingSoon;