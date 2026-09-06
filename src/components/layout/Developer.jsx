import '../../styles/developer.css'

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

            
            <a href="/curriculo-henrique-sena.pdf" download="curriculo-henrique-sena.pdf">
                <button type='button'>Baixar Currículo</button>
            </a>

        </div>
    )
}

export default Developer;