import { useState } from "react";

import { useAuth } from "../context/AuthContext";


function AuthTest() {

    const { user, token, login, logout } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    const handleLogin = async () => {

        setError("");

        try {

            await login(
                email,
                password
            );

        } catch (error) {

            setError(error.message);

        }

    };


    if (user) {

        return (
            <div>

                <h2>
                    Usuário autenticado
                </h2>

                <p>
                    ID: {user.id}
                </p>

                <p>
                    Nome: {user.name}
                </p>

                <p>
                    E-mail: {user.email}
                </p>

                <button onClick={logout}>
                    Sair
                </button>

            </div>
        );

    }


    return (
        <div>

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(event) =>
                    setEmail(event.target.value)
                }
            />

            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(event) =>
                    setPassword(event.target.value)
                }
            />

            <button
                onClick={handleLogin}
            >
                Entrar
            </button>

            {error && (
                <p>{error}</p>
            )}

        </div>
    );
}


export default AuthTest;