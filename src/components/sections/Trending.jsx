import "../../styles/collection.css"
import TrendCard from '../Cards/TrendCard'

import { productsTrending } from '../../services/products';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { splitTitleAnimation } from "../../Animations/SplitTextAnimations";



function Trending() {

    useGSAP(() => {
        splitTitleAnimation(".trending h2");

        gsap.to(".title-line", {
            width: "180px",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".trending",
                start: "top 75%"
            }
        });

        gsap.to(".banner-bg", {
            y: 100,
            ease: "none",

            scrollTrigger: {
                trigger: ".trending",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }, [])


    return (
        <section className="trending">
            <div className="trending-container">
                
                <div className="trending-header">
                    <h2>Compre as Novas Tendências</h2>
                    <span>Nova Coleção</span>
                </div>

                <div className="title-line"></div>

                <div className="trending-content">

                    <div className="banner-bg"></div>

                    <div className="trending-grid">
                        {productsTrending.map((trend) => (
                            <TrendCard
                                key={trend.name}
                                name={trend.name}
                                id={trend.id}
                                image={trend.image}
                            />
                        ))}
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Trending;