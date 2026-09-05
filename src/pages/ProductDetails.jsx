import '../styles/productDetails.css'

import gsap from "gsap";

import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { allProducts } from '../services/products';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer'
import LifeStyle from '../components/layout/LifeStyle';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { useAuth } from '../context/AuthContext';

import { BsTruck } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import { TbArrowBack } from "react-icons/tb";

import { useEffect } from "react";
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { formatPrice } from '../utils/formatPrice';


function ProductDetails() {

    const navigate = useNavigate();

    const { showToast } = useToast();
    
    const { id } = useParams();

    const product = allProducts.find((item) => item.id === Number(id));

    const galleryImages = product.images || [product.image];

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null);
    const [quantity, setQuantity] = useState(1);

    

    const diminuirQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const aumentarQuantity = () => {
        if (quantity < product.stock) {
            setQuantity(quantity + 1);
        }
    };

    const handleBuyNow = () => {

        if (!requireLogin()) {
            return;
        }

        if (!selectedSize) {
            alert("Selecione um tamanho");
            return;
        }

        const buyNowItem = {
            ...product,
            size: selectedSize,
            quantity: quantity
        };

        navigate('/cart', {
            state: {
                buyNowItem
            }
        });

        console.log({
            product,
            selectedSize,
            quantity
        });
    };
    
    const currentImage = galleryImages[selectedImageIndex];

    const imageRef = useRef(null);

    const { addToCart } = useCart();
    const { user } = useAuth();

    const requireLogin = () => {
        if (!user) {
            navigate('/login');
            return false;
        }

        return true;
    }

    const handleAddToCart = () => {

        if (!requireLogin()) {
            return;
        }

        if (!selectedSize) {
            alert("Selecione um tamanho");
            return;
        }

        addToCart(
            product,
            selectedSize,
            quantity
        );

        showToast("Produto adicionado ao carrinho!", "success")
    };
    
  /*  useEffect(() => {
        setSelectedImageIndex(0);
    }, [id]); */

    useEffect(() => {
        setSelectedImageIndex(0);
        setSelectedSize(null);
        setQuantity(1);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, [id]);
    

//    console.log(id);
//    console.log(product);
    
    useEffect(() => {
        gsap.fromTo(
            imageRef.current,
            {
                scale: 1.12,
                opacity: 0
            },
            {
                scale: 1,
                opacity: 1,
                duration: .8,
                ease: "power2.out"
            }
        );
    }, [selectedImageIndex]);

    if (!product) {
        return <h1>Produto não encontrado</h1>;
    }

    return (
        <>
       <NavBar />
        <section className="product-details">

        <div className="product-container">

        {/* GALERIA */}
        <div className="product-gallery">

            <div className="gallery-thumbnails">

                {galleryImages.map((img, index) => (
                    <button
                        key={img}
                        className={`thumb ${
                            selectedImageIndex === index ? "active" : ""
                        }`}
                        onClick={() => setSelectedImageIndex(index)}
                    >
                        <img src={img} alt="" />
                    </button>
                ))}

            </div>

            <div className="gallery-main">
                <img
                    ref={imageRef}        
                    src={currentImage}
                    alt={product.name}
                />
            </div>

        </div>

        {/* INFO */}
        <div className="product-info">

            <div className="breadcrumb">
                Home / {product.category} / {product.name} - {product.color}
            </div>

            <h1>{product.name}</h1>

            <h2 className="product-price">{formatPrice(product.price)}</h2>

            <p className="description">
                {product.description}
            </p>

            {/* TAMANHOS */}
            <div className="product-sizes">

                <div className="size-header">
                    <span>Tamanhos</span>
                </div>

                <div className="sizes">
                        {product.sizes.map((size) => (
                            <button
                                key={size}
                                className={selectedSize === size ? "active" : ""}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                    ))}
                </div>

            </div>

            {/* ESTOQUE */}
            <div className="stock">
                ✓ {product.stock} Disponível em estoque
            </div>

            {/* QUANTIDADE */}
            <div className="purchase-row">

                <div className="quantity">

                    <button onClick={diminuirQuantity}>-</button>

                                <span>{quantity}</span>

                    <button onClick={aumentarQuantity}>+</button>

                </div>

                <button
                    className="add-cart"
                        onClick={handleAddToCart}>
                    Adicionar ao Carrinho
                </button>

            </div>

            <button className="buy-now" onClick={handleBuyNow}>
                Comprar Agora
            </button>

            {/* BENEFÍCIOS */}
            <div className="product-benefits">

                <div className="benefits-info">
                            <BsTruck size={24} /> 
                            <p>Frete grátis</p>
                </div>

                <div className="benefits-info">
                            <TbArrowBack size={24} /> 
                            <p>Troca fácil</p>
                </div>

                <div className="benefits-info">
                            <CiLock size={24}/>
                            <p>Compra Segura</p>
                </div>

            </div>

        </div>

        </div>

    </section>
            <LifeStyle product={product} />

            <Footer />
</>
    );
}

export default ProductDetails;