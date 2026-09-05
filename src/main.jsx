import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ToastProvider } from './context/ToastContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import './index.css'

gsap.registerPlugin(ScrollTrigger);

const lenis = new Lenis({
  duration: 1.6,
  smoothWheel: true,
  smoothTouch: false,
})

window.lenis = lenis;

// avisa o ScrollTrigger toda vez que o Lenis rola a página
lenis.on('scroll', ScrollTrigger.update);

// o próprio ticker do GSAP passa a "puxar" o Lenis — um único loop, sincronizado
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// evita que o GSAP tente "compensar" atrasos de frame, o que junto
// com o Lenis causaria dessincronia
gsap.ticker.lagSmoothing(0);

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ToastProvider>
      <CartProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </CartProvider>
    </ToastProvider>
  </BrowserRouter>
)