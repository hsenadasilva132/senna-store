import '../../styles/preloader.css';

import { useEffect, useRef } from 'react';

import gsap from 'gsap';


function Preloader({ onComplete }) {

    const preloaderRef = useRef(null);
    const logoRef = useRef(null);
    const counterRef = useRef(null);
    const lineRef = useRef(null);


    useEffect(() => {
        const counter = {
            value: 0
        };

        const timeline = gsap.timeline({

            onComplete: () => {
                gsap.to(
                    preloaderRef.current,
                    {
                        yPercent: -100,
                        duration: .8,
                        ease: "power4.inOut",

                        onComplete: () => {

                            onComplete();
                        }
                    }
                );
            }

        });

        timeline
            .fromTo(
                logoRef.current,
                {
                    opacity: 0,
                    y: 20
                },
                {
                    opacity: 1,
                    y: 0,
                    duration: .7,
                    ease: "power3.out"
                }
            )
            .to(
                counter,
                {
                    value: 100,
                    duration: 2,
                    ease: "power2.out",

                    onUpdate: () => {
                        if (counterRef.current) {

                            counterRef.current.textContent =
                                `${Math.round(counter.value)}%`;

                        }
                    }
                },
                "-=.2"
            )
            .to(
                lineRef.current,
                {
                    scaleX: 1,
                    duration: 1.8,
                    ease: "power2.out"
                },
                "<"
            );
    }, [onComplete]);


    return (

        <div className="preloader" ref={preloaderRef}>

            <div className="preloader-content">
                <div className="preloader-logo" ref={logoRef}>
                    SennaStore
                </div>

                <div className="preloader-bottom">
                    <span className="preloader-counter" ref={counterRef}>0%</span>
                    <div className="preloader-line">
                        <div
                            className="preloader-line-progress"
                            ref={lineRef}
                        />
                    </div>
                    <span className="preloader-label">
                        Preparando sua experiência
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Preloader;