/*import API_URL from '../services/api';

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(
        () => localStorage.getItem("access_token")
    );
    const [loadingUser, setLoadingUser] = useState(true);

    useEffect(() => {
        // Restaurar Sessão
        const restoreSession = async () => {
            const savedToken = localStorage.getItem("access_token");

            if (!savedToken) {
                setLoadingUser(false)
                return;
            }

            try {
                const response = await fetch(
                    `${API_URL}/auth/me`,
                    {
                        headers: {
                            Authorization:
                                `Bearer ${savedToken}`
                        }
                    }
                );

                if (!response.ok) {
                    throw new Error(
                        "Token inválido ou expirado."
                    );
                }

                const userData = await response.json();

                setToken(savedToken);
                setUser(userData);
            } catch (error) {
                console.error("Erro ao restaurar Sessão:", error);

                localStorage.removeItem("access_token");

                setToken(null);
                setUser(null);
            } finally {
                setLoadingUser(false)
            }
        };

        restoreSession();
    }, []);


    // Login
    const login = async (email, password) => {
        const body = new URLSearchParams();

        body.append("username", email);
        body.append("password", password);

        const response = await fetch(
            `${API_URL}/auth/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded"
                },

                body
            }
        );

        if (!response.ok) {

            const errorText = await response.text();

            console.error("Erro no login:", {
                status: response.status,
                body: errorText
            });

            throw new Error(
                errorText || "Não foi possível fazer login."
            );
        }

        const responseText = await response.text();

        console.log("Resposta do login:", responseText);

        const data = JSON.parse(responseText);


        const accessToken = data.access_token;

        // Salva no estado
        setToken(accessToken);

        // Salva no navegador
        localStorage.setItem(
            "access_token",
            accessToken
        );

        // Busca de Usuário
        const userResponse = await fetch(
            `${API_URL}/auth/me`,
            {
                headers: {
                    Authorization:
                        `Bearer ${accessToken}`
                }
            }
        );

    if (!userResponse.ok) {

        const errorText =
            await userResponse.text();

        console.error("Erro no /auth/me:", {
            status: userResponse.status,
            body: errorText
        });

        setToken(null);

        throw new Error(
            errorText ||
            "Não foi possível obter os dados do usuário."
        );

    }

    const userText =
        await userResponse.text();

    console.log("Resposta do /auth/me:", userText);

    const userData =
        JSON.parse(userText);

        setUser(userData);

        return userData;
    };


    // Saída da conta
    const logout = () => {

        localStorage.removeItem(
            "access_token"
        )

        setToken(null);
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                loadingUser,
                setUser,
                setToken
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
} */

import {
    createContext,
    useContext,
    useEffect,
    useState
} from "react";

import API_URL from "../services/api";


const AuthContext = createContext();


export function AuthProvider({ children }) {

    const [user, setUser] = useState(null);

    const [token, setToken] = useState(
        () => localStorage.getItem("access_token")
    );

    const [loadingUser, setLoadingUser] =
        useState(true);


    // =========================
    // RESTAURAR SESSÃO
    // =========================

    useEffect(() => {

        const restoreSession = async () => {

            const savedToken =
                localStorage.getItem("access_token");

            if (!savedToken) {

                setLoadingUser(false);

                return;
            }

            try {

                const response = await fetch(
                    `${API_URL}/auth/me`,
                    {
                        headers: {
                            Authorization:
                                `Bearer ${savedToken}`
                        }
                    }
                );


                if (!response.ok) {

                    throw new Error(
                        "Token inválido ou expirado."
                    );

                }


                const userData =
                    await response.json();


                setToken(savedToken);

                setUser(userData);

            } catch (error) {

                console.error(
                    "Erro ao restaurar sessão:",
                    error
                );


                localStorage.removeItem(
                    "access_token"
                );

                setToken(null);

                setUser(null);

            } finally {

                setLoadingUser(false);

            }

        };


        restoreSession();

    }, []);


    // =========================
    // LOGIN
    // =========================

    const login = async (
        email,
        password
    ) => {

        const body =
            new URLSearchParams();


        body.append(
            "username",
            email
        );

        body.append(
            "password",
            password
        );


        const response = await fetch(
            `${API_URL}/auth/login`,
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/x-www-form-urlencoded"
                },

                body
            }
        );


        if (!response.ok) {

            const errorData =
                await response.json();

            throw new Error(
                errorData.detail ||
                "Não foi possível fazer login."
            );

        }


        const data =
            await response.json();


        const accessToken =
            data.access_token;


        // Salva no estado
        setToken(accessToken);


        // Salva no navegador
        localStorage.setItem(
            "access_token",
            accessToken
        );


        // Busca usuário
        const userResponse =
            await fetch(
                `${API_URL}/auth/me`,
                {
                    headers: {
                        Authorization:
                            `Bearer ${accessToken}`
                    }
                }
            );


        if (!userResponse.ok) {

            localStorage.removeItem(
                "access_token"
            );

            setToken(null);

            throw new Error(
                "Não foi possível obter os dados do usuário."
            );

        }


        const userData =
            await userResponse.json();


        setUser(userData);


        return userData;

    };


    // =========================
    // LOGOUT
    // =========================

    const logout = () => {

        localStorage.removeItem(
            "access_token"
        );

        setToken(null);

        setUser(null);

    };


    return (

        <AuthContext.Provider
            value={{
                user,
                token,
                login,
                logout,
                loadingUser,
                setUser,
                setToken
            }}
        >

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}