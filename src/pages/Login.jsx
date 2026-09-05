import '../styles/login.css'

import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FiArrowRight } from 'react-icons/fi';

import Button from '../components/layout/button'
import { useAuth } from '../context/AuthContext';


function Login() {

    const navigate = useNavigate();
    const location = useLocation();

    const { login, user, loadingUser } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);


    /*
        Caso o usuário já esteja logado,
        não faz sentido mostrar a tela de login.
    */
    useEffect(() => {
        if (!loadingUser && user) {
            navigate('/', {
                replace: true
            });
        }
    }, [user, loadingUser, navigate]);

    /*
        Caminho para onde o usuário será enviado
        depois do login.

        Exemplo:
        entrou no checkout sem login
        -> faz login
        -> volta para o checkout.
    */
    
    const redirectPath = location.state?.from || '/';

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");

        //Validação básica

        if (!email.trim() || !password) {
            setError('Preencha seu email e senha.');

            return;
        }

        try {
            setIsSubmitting(true);

            await login(
                email.trim(),
                password
            );

            /*
                Login concluído.
    
                O AuthContext já atualizou:
                token
                user
                localStorage
            */
        
            navigate(redirectPath, {
                replace: true
            });
        } catch (error) {
            console.error('Erro ao fazer o login:', error);

            setError(error.message || 'Não foi possível fazer o login.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className='login-page'>
            <section className='login-visual'>
                <div className='login-visual-overlay'/>
                <div className='login-visual-content'>
                    <span>SENNA STORE</span>
                    <h1>
                        Seu estilo.
                        <br />
                        Seu ritmo.
                    </h1>

                    <p>Acesse sua conta para acompanhar seus pedidos,
                        salvar seus favoritos e continuar sua experiência.
                    </p>
                </div>
            </section>

            <section className='login-form-section'>
                <div className='login-form-container'>
                    <div className='login-header'>
                        BEM-VINDO
                    </div>
                    <h2>Entrar</h2>
                    <p>Entre na sua conta para continuar.</p>
                </div>
                <form className='login-form' onSubmit={handleSubmit}>
                    <div className='login-field'>
                        <label htmlFor="login-email">
                            E-mail
                        </label>

                        <input
                            type="email"
                            id="login-email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder='seuemail@email.com'
                            autoComplete='email'
                        />
                    </div>

                    <div className='login-field'>
                        <div className='login-password-header'>
                            <label className='login-password'>
                                Senha
                            </label>

                            <button
                                type='button'
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword
                                    ? 'Ocultar'
                                    : 'Mostrar'
                                }
                            </button>
                        </div>

                        <div className='login-password-input'>
                            <input
                                id='login-password'
                                type={
                                    showPassword
                                        ? 'text'
                                        : 'password'
                                }
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder='Sua senha'
                                autoComplete='current-password'
                            />

                            <button
                                    type="button"
                                    className="login-password-icon"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                    aria-label={
                                        showPassword
                                            ? 'Ocultar senha'
                                            : 'Mostrar senha'
                                    }
                                >
                                    {showPassword
                                        ? <IoEyeOff />
                                        : <IoEye />
                                    }
                                </button>
                        </div>
                    </div>
                    <div className="login-options">

                            <button
                                type="button"
                                className="login-forgot"
                                onClick={() => navigate('/coming-soon')}
                            >
                                Esqueci minha senha
                            </button>
                        </div>
                        {error && (

                            <div className="login-error">
                                {error}
                            </div>

                        )}
                        <Button
                            text={
                                isSubmitting
                                    ? 'Entrando...'
                                    : 'Entrar'
                            }
                            type="submit"
                        />
                </form>

                <div className="login-register">
                        <span>Ainda não possui uma conta?</span>

                        <Link to="/register">
                            Criar conta
                            <FiArrowRight />
                        </Link>
                </div>
            </section>
        </main>
    )   
}

export default Login;