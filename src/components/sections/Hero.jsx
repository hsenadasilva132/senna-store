import NavBar from '../../components/layout/NavBar'
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { useState, useRef, useLayoutEffect } from 'react';
import { heroParallax } from '../../Animations/heroAnimations'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import '../../styles/global.css'
import Button from '../../components/layout/button'

import imageHome1 from '../../images/imageHome1.webp'
import imageHome2 from '../../images/imageHome2.webp'
import imageHome3 from '../../images/imageHome3.webp'

const SLIDES = [
    {
        image: imageHome1,
        titleLine1: 'Overcome Your',
        titleLine2: 'Limits',
        btnText: 'Compre Agora',
        link: '/shop'
    },
    {
        image: imageHome2,
        titleLine1: 'Step Into',
        titleLine2: 'Motion',
        btnText: 'Compre Agora',
        link: '/shop'
    },
    {
        image: imageHome3,
        titleLine1: 'Run Your',
        titleLine2: 'Way',
        btnText: 'Compre Agora',
        link: '/shop'
    },
];

const AUTOPLAY_MS = 4000;

// timings do efeito esteira — ajuste aqui se quiser mais rápido/lento
const IMG_DURATION = 0.9;      // duração do deslize da imagem
const TEXT_DELAY = 0.25;       // "alguns milissegundos" depois da imagem começar
const TEXT_EXIT_DURATION = 0.6;
const TEXT_ENTER_DURATION = 0.4;

export default function Hero() {

    const navigate = useNavigate();


    const [index, setIndex] = useState(0);

    const [layers, setLayers] = useState([
        SLIDES[0],
        SLIDES[1] ?? SLIDES[0],
    ]);

    const bgRefs = useRef([]);
    const textRefs = useRef([]);

    const frontIndexRef = useRef(0);   // qual camada (0 ou 1) está visível agora
    const currentSlideRef = useRef(0); // qual slide (índice de SLIDES) está visível agora
    const isAnimating = useRef(false);
    const autoplayRef = useRef(null);
    const pendingRef = useRef(null);

    const startAutoplay = () => {
        clearInterval(autoplayRef.current);
        autoplayRef.current = setInterval(() => {
            goTo(currentSlideRef.current + 1);
        }, AUTOPLAY_MS);
    }

    const goTo = (targetIndex) => {
        const newIndex = (targetIndex + SLIDES.length) % SLIDES.length;
        if (isAnimating.current || newIndex === currentSlideRef.current) return;

        isAnimating.current = true;
        clearInterval(autoplayRef.current);

        const front = frontIndexRef.current;
        const back = front === 0 ? 1 : 0;

        pendingRef.current = { front, back, newIndex };
        setLayers(prev => {
            const next = [...prev];
            next[back] = SLIDES[newIndex];
            return next;
        });
    }

    const next = () => goTo(currentSlideRef.current + 1);
    const prev = () => goTo(currentSlideRef.current - 1);

    // roda a animação assim que o novo conteúdo da camada "de trás" já estiver no DOM
    useLayoutEffect(() => {
        const pending = pendingRef.current;
        if (!pending) return;
        pendingRef.current = null;

        const { front, back, newIndex } = pending;

        const frontBg = bgRefs.current[front];
        const backBg = bgRefs.current[back];
        const frontText = textRefs.current[front];
        const backText = textRefs.current[back];

        // posiciona a camada de entrada fora da tela, pronta pra entrar
        gsap.set(backBg, { xPercent: 100 });
        gsap.set(backText, { y: 40, opacity: 0, pointerEvents: 'none' });

        const tl = gsap.timeline({
            onComplete: () => {
                frontIndexRef.current = back;
                currentSlideRef.current = newIndex;
                isAnimating.current = false;

                gsap.set(frontText, { pointerEvents: 'none' });
                gsap.set(backText, { pointerEvents: 'auto' });

                setIndex(newIndex);
                startAutoplay();
            }
        });

        // 1. imagem: a atual desliza pra esquerda, a nova entra da direita — juntas
        tl.to(frontBg, { xPercent: -100, duration: IMG_DURATION, ease: "power3.inOut" }, 0)
          .to(backBg, { xPercent: 0, duration: IMG_DURATION, ease: "power3.inOut" }, 0)

          // 2. texto atual: some subindo, começando "alguns ms" depois da imagem
          .to(frontText, {
              y: -40,
              opacity: 0,
              duration: TEXT_EXIT_DURATION,
              ease: "power2.in"
          }, TEXT_DELAY)

          // 3. texto novo: entra subindo de baixo, logo depois do texto antigo sumir
          .to(backText, {
              y: 0,
              opacity: 1,
              duration: TEXT_ENTER_DURATION,
              ease: "power2.out"
          }, TEXT_DELAY + TEXT_EXIT_DURATION);

    }, [layers]);

    useGSAP(() => {
        heroParallax();

        // estado inicial: camada 0 visível, camada 1 escondida à direita
        gsap.set(bgRefs.current[0], { xPercent: 0 });
        gsap.set(bgRefs.current[1], { xPercent: 100 });
        gsap.set(textRefs.current[0], { y: 0, opacity: 1, pointerEvents: 'auto' });
        gsap.set(textRefs.current[1], { y: 40, opacity: 0, pointerEvents: 'none' });

        startAutoplay();
        return () => clearInterval(autoplayRef.current);
    }, []);

    return (
        <section className="hero">
            <div className="hero-bg-wrap">
                {layers.map((slide, i) => (
                    <div
                        key={i}
                        className="hero-bg-layer"
                        ref={el => (bgRefs.current[i] = el)}
                        style={{ backgroundImage: `url(${slide.image})` }}
                    />
                ))}
            </div>

            <div className="hero-overlay" />

            <NavBar />
            <div className='hero-content-wrap'>
                {layers.map((slide, i) => (
                    <div
                        key={i}
                        className="hero-content-layer"
                        ref={el => (textRefs.current[i] = el)}
                    >
                        <h1 className="hero-title">
                            {slide.titleLine1} <br />{slide.titleLine2}
                        </h1>
                        <Button text={slide.btnText} onClick={() => navigate(slide.link)} />
                    </div>
                ))}
            </div>
            
            <button
                className="hero-arrow hero-arrow-left"
                onClick={prev}
                aria-label="slide anterior"
            >
                <GoChevronLeft />
            </button>
            <button
                className="hero-arrow hero-arrow-right"
                onClick={next}
                aria-label="próximo slide"
            >
                <GoChevronRight />
            </button>

            <div className="hero-dots">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        className={`hero-dot ${i === index ? 'active' : ''}`}
                        onClick={() => goTo(i)}
                        aria-label={`ir para slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}