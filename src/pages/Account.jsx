import '../styles/account.css';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

import Button from '../components/layout/button';
import { FiUser, FiMail, FiLogOut, FiChevronRight } from 'react-icons/fi';

function Account() {

    const navigate = useNavigate();

    const { user, loadingUser } = useAuth();

    // Enquanto a sessão está sendo restaurada.
    if (loadingUser) {
        return (
            <main className='account-loading'>
                <p>Carregando a sua conta...</p>
            </main>
        );
    }

    // Usuário não autenticado
    if (!user) {
        return (
            <main className='account-unauthenticated'>
                <h1>Acesso Restrito</h1>
                <p>Entre na sua conta para acessar suas informações</p>
                <Button onClick={() => navigate('/login')} text="Fazer login"/>
            </main>
        )
    }

    const handleLogout = () => {
        navigate('/')
    };

    return (
        <main className='account-page'>
            <section className='account-header'>
                <div>
                    <span className='account-label'>SENNA STORE</span>
                    <h1>Minha conta</h1>
                    <p>Gerencie suas informações e acompanhe sua experiência na loja.</p>
                </div>

                <button className='account-logout-button' onClick={handleLogout}>
                    <FiLogOut />
                    Sair
                </button>
            </section>

            <section className='account-content'>
                <div className='account-card'>
                    <div className='account-card-header'>
                        <div>
                            <span>Perfil</span>
                            <h2>Dados pessoais</h2>
                        </div>
                        <FiUser />
                    </div>

                    <div className='account-info'>
                        <div className='account-info-item'>
                            <span>Nome</span>
                            <strong>{user.name}</strong>
                        </div>
                        <div className='account-info-item'>
                            <span>Email</span>
                            <strong>{user.email}</strong>
                        </div>
                    </div>
                </div>

                <button
                    className='account-navigation-card'
                    onClick={() => navigate('/orders')}
                >
                    <div>
                        <span>Histórico</span>
                        <h2>Meus pedidos</h2>
                        <p>Acompanhe seus pedidos e compras.</p>
                    </div>
                    <FiChevronRight />
                </button>

                <button className='account-navigation-card' onClick={() => navigate('/coming-soon')}>
                    <div>
                        <span>Segurança</span>
                        <h2>Conta e segurança</h2>
                        <p>Gerencie sua senha e outras configurações.</p>
                    </div>
                    <FiChevronRight />
                </button>
            </section>
        </main>
    );
}

export default Account;