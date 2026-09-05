import '../../styles/developer.css'
//import Curriculo from '../../assets/Henrique Sena da Silva.pdf';

import htmlIcon from '../../assets/icons/html.svg';
import cssIcon from '../../assets/icons/css.svg';
import javascriptIcon from '../../assets/icons/javascript.svg';
import typescriptIcon from '../../assets/icons/typescript.svg';
import reactIcon from '../../assets/icons/react.svg';
import pythonIcon from '../../assets/icons/python.svg';
import mysqlIcon from '../../assets/icons/mysql.svg';


function Developer() {
    return (
        <div className="developer-card">
            <span className="developer-label">
                Design e Desenvolvimento por
            </span>

            <h2>Henrique Sena</h2>

            <p>Desenvolvedor Fullstack</p>

            <div className="tech-stack">
                <img src={htmlIcon} alt="HTML" />
                <img src={cssIcon} alt="css" />
                <img src={javascriptIcon} alt="javascript" />
                <img src={typescriptIcon} alt="typescript" />
                <img src={reactIcon} alt="react" />
                <img src={pythonIcon} alt="python" />
                <img src={mysqlIcon} alt="mysql" />
            </div>

            
            <button type='button' onClick={() => {
                window.open(
                    'https://www.linkedin.com/in/henrique-sena-da-silva/',
                    '_blank',
                    'noopener, noreferrer'
                );
                }}>Ver perfil profissional</button>

        </div>
    )
}

export default Developer;