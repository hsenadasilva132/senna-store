import '../../styles/contactform.css'
import Button from '../layout/button'

import emailjs from '@emailjs/browser';

import { useRef, useState } from 'react';

function ContactForm() {

    const form = useRef();

    const [status, setStatus] = useState("");
    const [sending, setSending] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (sending) return;

        setSending(true);
        setStatus("Enviando...");

        try {

            await emailjs.sendForm(
                'service_y2ws3mo',
                'template_2v7k8e7',
                form.current,
                {
                    publicKey: 'US8MSvLQUB-CLganJ'
                }
            );

            setStatus("Mensagem enviada com sucesso!");

            form.current.reset();

        } catch (error) {

            console.error("Erro:", error);

            setStatus(
                "Não foi possível enviar a mensagem. Tente novamente."
            );
        } finally {
            setSending(false);
        }
    };

    return (
        <div className='contact-form'>

            <h2>Entre em Contato</h2>

            <p>
                Tem uma ideia ou projeto? Vamos conversar.
            </p>

            <form
                ref={form}
                onSubmit={handleSubmit}
            >

                <input
                    type="text"
                    name="name"
                    placeholder="Seu nome"
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Seu email"
                    required
                />

                <input
                    type="hidden"
                    name="time"
                    value={new Date().toLocaleString('pt-BR')}
                />

                <textarea
                    name="message"
                    placeholder="Sua mensagem"
                    required
                />

                <Button
                    text={sending ? "Enviando..." : "Enviar"}
                    type="submit"
                />

                {status && (
                    <span className="contact-status">
                        {status}
                    </span>
                )}

            </form>

        </div>
    );
}

export default ContactForm;