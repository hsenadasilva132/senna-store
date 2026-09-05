import CategoryCard from "../Cards/CategoryCard";
import CategoryMarquee from "../Cards/CategoryMarquee"
import { useState } from 'react';
import { categoriesBackgroundScroll } from "../../Animations/categoriesAnimations"
import { marqueeAnimation } from "../../Animations/marqueeAnimations";
//import { categoriesScroll } from "../../Animations/categoriesAnimations";
//import arrow from '../../assets/icons/seta.svg';
import '../../styles/categories.css';


import corrida from '../../images/corrida.webp'
import futebol from '../../images/futebol.webp'
import treino from '../../images/treino.webp'
import casual from '../../images/casual.webp'
import { useGSAP } from "@gsap/react";

function Categories() {

    useGSAP(() => {
        categoriesBackgroundScroll();
        marqueeAnimation();
    }) 
    

    const [activeCategory, setActiveCategory] = useState("#B3C1D6");

    const categories = [
        {
            title: "Corrida",
            image: corrida,
            category: "running",
            bg: "#C4CEDD"
        },
        {
            title: "Futebol",
            image: futebol,
            category: "football",
            bg: "#7E879A"
        },
        {
            title: "Treino",
            image: treino,
            category: "training",
            bg: "#9CA6B8"
        },
        {
            title: "Casual",
            image: casual,
            category: "casual",
            bg: "#747D91"
        }
    ]

    const categoriesMarquee = [
        {
            text: "RUNNING"
        },
        {
            text: "SPORTWEAR"
        },
        {
            text: "TRAINING"
        },
        {
            text: "STREET"
        }
    ]

    return (
        <section className="categories"
            style={{
                background: activeCategory,
                transition: "background-color 0.5s ease"
        }}>
            <div className="categories-header">
                <h2>Categorias<br />Explore por estilo</h2>
{/* 
                <button className="categories-btn">
                    <span>Ver todos</span>
                    <img src={arrow} alt="seta" />
                </button> */}
            </div>

            <div className="categories-row">

                {categories.map((category) => (
                    <CategoryCard
                        title={category.title}
                        category={category.category}
                        image={category.image}
                        key={category.title}
                        onMouseEnter={() => setActiveCategory(category.bg)}
                        onMouseLeave={() => setActiveCategory("#B3C1D6")}
                    />
                ))}
            </div>
                <CategoryMarquee items={categoriesMarquee} />
           
        </section>
    )
}

export default Categories;