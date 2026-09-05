import "../../styles/products.css"
import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { splitTitleAnimation } from '../../Animations/SplitTextAnimations';

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProductsCard from '../../components/Cards/ProductsCard'
import Button from '../layout/button'
import { products, airMaxPlus } from '../../services/products';


function Products() {

    useGSAP(() => {
        splitTitleAnimation(".products-header h2");
    })

    useGSAP(() => {
        gsap.to(".title-line", {
            width: "180px",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".products",
                start: "top 75%"
            }
        });
    });

    const navigate = useNavigate();

    const [progress, setProgress] = useState(30);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);


    const sliderRef = useRef(null);

    const handleScroll = () => {
        const element = sliderRef.current;
        const scrollLeft = element.scrollLeft;

        const maxScroll = element.scrollWidth - element.clientWidth;

        const percentage = scrollLeft / maxScroll;

        setProgress(percentage);

        setCanScrollLeft(scrollLeft > 5);
        setCanScrollRight(scrollLeft < maxScroll - 5);
    };

    useEffect(() => {
        handleScroll();
        //console.log(sliderRef.current)
    }, []);


    const scrollRight = () => {
        sliderRef.current.scrollBy({
            left: 260,
            behavior: "smooth"
        });
    };

    const scrollLeft = () => {
        sliderRef.current.scrollBy({
            left: -260,
            behavior: "smooth"
        });
    };

    return (
        <section className="products">
            <div className="products-container">
                <div className="products-header">
                    <div>
                        <h2>Modelos</h2>
                        <span className="products-subtitle">Mais comprados</span>
                        <div className="title-line"></div>
                    </div>

                    <div className="products-link">
                        <Button text="Modelos disponíveis" onClick={() => navigate('/shop')} />
                    </div>
                </div>

                <div className="products-slider-wrapper">

                    <div className="products-grid"
                        ref={sliderRef}
                        onScroll={handleScroll}>
                    {products.map((product) => (
                        <ProductsCard
                            key={product.name}
                            slug={product.slug}
                            id={product.id}
                            name={product.name}
                            color={product.color}
                            price={product.price}
                            oldPrice={product.oldPrice}
                            sale={product.sale}
                            image={product.image}
                        />
                    ))}
                    </div>
                    <div className="progress-line">
                    <div className="progress-fill"
                        style={{ transform: `translateX(calc(${progress} * (220px - 60px))` }}>
                        </div>
                    </div>
                    <div className="slider-controls">
                        <button className={`slider-arrow ${!canScrollLeft ? "disabled" : ""}`}
                            onClick={scrollLeft}
                            disabled={!canScrollLeft}>
                            <IoIosArrowBack />
                        </button>

                        <button className={`slider-arrow ${!canScrollRight ? "disabled" : ""}`}
                            onClick={scrollRight}
                            disabled={!canScrollRight}
                        >
                            <IoIosArrowForward />
                        </button>
                    </div>
                </div>

                {/* AIR MAX PLUS */}
                <div className="products-category">

                <div className="category-header">
                    <div>
                        <h3>Air Max Plus</h3>
                        {/* <span className="products-subtitle">Mais comprados</span> */}
                    </div>

                    <div className="products-link">
                            <Button text="Modelos disponíveis" onClick={() => navigate('/shop')} />
                    </div>
                </div>
                <div className="products-slider-wrapper">
                        <div className="airmax-grid">
                    {airMaxPlus.map((product) => (
                        <ProductsCard
                            key={product.color}
                            id={product.id}
                            name={product.name}
                            color={product.color}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                        </div>
                  </div>
                </div>
            </div>
        </section>
    );

}

export default Products;