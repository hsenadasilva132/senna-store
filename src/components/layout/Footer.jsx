import '../../styles/footer.css'
import ContactForm from '../../components/layout/ContactForm';
import Developer from '../../components/layout/Developer';

import { useEffect } from 'react';
import { footerAnimation } from '../../Animations/footerAnimations';


import githubIcon from '../../assets/icons/github.svg';
import linkedinIcon from '../../assets/icons/linkedin.svg';


import compraSeguraIcon from '../../assets/icons/compraSegura.svg';
import mastercardIcon from '../../assets/icons/mastercard.svg';
import pixIcon from '../../assets/icons/pix.svg';
import visaIcon from '../../assets/icons/visa.svg'; 



function Footer() {

    useEffect(() => {
        footerAnimation();
    })

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-column">
                        <h3>Sobre</h3>
                        <p>
                            Especilistas em calçados esportivos, <br/>
                            unindo performance e estilo.
                        </p>

                        <h3>Pagamentos</h3>

                         <div className="payment-icons">
                            <img src={compraSeguraIcon} alt="Compra Segura Ícone" id='icon-compra'/>
                            <img src={mastercardIcon} alt="Mastercard Ícone" />
                            <img src={pixIcon} alt="Pix Ícone" />
                            <img src={visaIcon} alt="Visa Ícone" />
                        </div>

                    </div>

                    <div className="footer-column">
                        <h3>Ajuda</h3>

                        <a href="">FAQ</a>
                        <a href="">Política de Devolução</a>
                        <a href="">Termos de Uso</a>
                        <a href="">Contato</a>
                    </div>

                    <div className="footer-column">
                        <h3>Redes Sociais</h3>

                         <div className="social-links">
                            <a href="https://github.com/hsenadasilva132" target='_blank'><img src={githubIcon} alt="github" /></a>
                            <a href="https://www.linkedin.com/in/henrique-sena-da-silva/" target='_blank'><img src={linkedinIcon} alt="linkedin" /></a>
                        </div> 
                    </div>
                </div>

                <div className="footer-divisor"></div>

                <div className="footer-bottom">
                    <ContactForm />
                    <Developer />
                </div>

                <h3 className="footer-logo">SennaStore</h3>

                <p className="footer-direitos">&copy; 2026. Todos os direitos reservados por Henrique Sena</p>
            </div>
        </footer>
    )
}

export default Footer;