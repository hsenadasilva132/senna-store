import '../styles/register.css';

import { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

import Button from '../components/layout/button';
import { useAuth } from '../context/AuthContext';
import API_URL from '../services/api';

function Register() {

    const navigate = useNavigate();

    const {
        user,
        loadingUser,
        login
    } = useAuth();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);


    useEffect(() => {

        if (!loadingUser && user) {
            navigate('/', {
                replace: true
            });
        }
    }, [
        user,
        loadingUser,
        navigate
    ]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');


        if (
            !name.trim() ||
            !email.trim() ||
            !password ||
            !confirmPassword
        ) {

            setError('Preencha todos os campos.');
            return;
        }


        if (password.length < 8) {
            setError('A senha deve possuir pelo menos 8 caracteres.');
            return;
        }

        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            return;
        }

        try {

            setIsSubmitting(true);

            const response = await fetch(
                `${API_URL}/auth/register`,
                {
                    method: 'POST',

                    headers: {
                        'Content-Type':
                            'application/json'
                    },

                    body: JSON.stringify({
                        name: name.trim(),
                        email: email.trim().toLowerCase(),
                        password
                    })
                }
            );

            const data =
                await response.json();

            if (!response.ok) {

                throw new Error(data.detail || 'Não foi possível criar a conta.'
                );
            }

            await login(
                email.trim().toLowerCase(),
                password
            );

            navigate('/', {
                replace: true
            });

        } catch (error) {

            console.error('Erro no cadastro:', error);

            setError(error.message || 'Não foi possível criar a conta.');

        } finally {
            setIsSubmitting(false);
        }

    };


    return (

        <main className="register-page">
            <section className="register-visual">
                <div className="register-visual-overlay" />
                <div className="register-visual-content">

                    <span>SENNA STORE</span>

                    <h1>
                        Comece sua
                        <br />
                        jornada.
                    </h1>

                    <p>
                        Crie sua conta para acompanhar
                        pedidos, salvar seus favoritos e
                        ter uma experiência personalizada.
                    </p>
                </div>
            </section>


            <section className="register-form-section">
                <div className="register-form-container">
                    <div className="register-header">
                        <span className="register-label">
                            NOVO POR AQUI?
                        </span>

                        <h2>Criar conta</h2>
                        <p>Preencha seus dados para começar.</p>
                    </div>

                    <form
                        className="register-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="register-field">

                            <label htmlFor="register-name">
                                Nome
                            </label>

                            <input
                                id="register-name"
                                type="text"
                                value={name}
                                onChange={(event) =>
                                    setName(
                                        event.target.value
                                    )
                                }
                                placeholder="Seu nome"
                                autoComplete="name"
                            />
                        </div>

                        <div className="register-field">

                            <label htmlFor="register-email">
                                E-mail
                            </label>

                            <input
                                id="register-email"
                                type="email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(
                                        event.target.value
                                    )
                                }
                                placeholder="seuemail@email.com"
                                autoComplete="email"
                            />

                        </div>

                        <div className="register-field">

                            <label htmlFor="register-password">
                                Senha
                            </label>

                            <div className="register-password-input">

                                <input
                                    id="register-password"
                                    type={
                                        showPassword
                                            ? 'text'
                                            : 'password'
                                    }
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(
                                            event.target.value
                                        )
                                    }
                                    placeholder="Mínimo de 8 caracteres"
                                    autoComplete="new-password"
                                />

                                <button
                                    type="button"
                                    className="register-password-icon"
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                >
                                    {showPassword
                                        ? <IoEyeOff />
                                        : <IoEye />
                                    }
                                </button>
                            </div>
                        </div>


                        <div className="register-field">

                            <label htmlFor="register-confirm-password">
                                Confirmar senha
                            </label>

                            <div className="register-password-input">

                                <input
                                    id="register-confirm-password"
                                    type={
                                        showConfirmPassword
                                            ? 'text'
                                            : 'password'
                                    }
                                    value={confirmPassword}
                                    onChange={(event) =>
                                        setConfirmPassword(
                                            event.target.value
                                        )
                                    }
                                    placeholder="Digite a senha novamente"
                                    autoComplete="new-password"
                                />

                                <button
                                    type="button"
                                    className="register-password-icon"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                >
                                    {showConfirmPassword
                                        ? <IoEyeOff />
                                        : <IoEye />
                                    }
                                </button>
                            </div>
                        </div>

                        {error && (
                            <div className="register-error">
                                {error}
                            </div>
                        )}

                           <Button
                            text={
                                isSubmitting
                                    ? 'Criando conta...'
                                    : 'Criar conta'
                            }
                            type="submit"
                        />
                    </form>

                    <div className="register-login">
                        <span>
                            Já possui uma conta?
                        </span>

                        <Link to="/login">
                            Entrar
                            <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Register;