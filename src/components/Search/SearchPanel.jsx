import '../../styles/searchPanel.css';

import { useEffect, useMemo, useRef } from 'react';
import { FiSearch, FiX, FiArrowRight } from 'react-icons/fi';
import { PiSmileySadLight } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

import { allProducts } from '../../services/products';
import Button from '../layout/button';

import gsap from 'gsap';

function SearchPanel({ isOpen, searchTerm, setSearchTerm, onClose }) {

    const navigate = useNavigate();

    const inputRef = useRef(null);

    const panelRef = useRef(null);
    const overlayRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (!isOpen) return; 
            
        const timer = setTimeout(() => {
            inputRef.current?.focus();
        }, 250);

        return () => clearTimeout(timer);
        
    }, [isOpen]);

    useEffect(() => {
        function handleEscape(event) {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        }

        document.addEventListener(
            'keydown',
            handleEscape
        );

        return () => {
            document.removeEventListener(
                'keydown',
                handleEscape
            )
        }
    }, [onClose, isOpen]);

  /*  useEffect(() => {
        if (!isOpen) return;

        const previousBodyOverflow = document.body.style.overflow;

        const previousHtmlOverflow = document.documentElement.style.overflow;

        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = previousBodyOverflow;

            document.documentElement.style.overflow = previousHtmlOverflow;
        };
    }, [isOpen]); */

    const results = useMemo(() => {
        if (!searchTerm.trim()) {
            return [];
        }

        const search = searchTerm.toLowerCase().trim();

        return allProducts
            .filter(product =>
                product.name
                    .toLowerCase()
                    .includes(search) ||
                product.color
                    .toLowerCase()
                    .includes(search) ||
                product.category
                    .toLowerCase()
                    .includes(search)
            )
            .slice(0, 5);
    }, [searchTerm]);

    const popularSearches = [
        'Air Max',
        'Running',
        'Dunk',
        'Football'
    ];

    const handlePopularSearch = (term) => {
        setSearchTerm(term);
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
        onClose();
        setSearchTerm('');
    };

    const handleSeeAll = () => {
        navigate('/shop');
        onClose();
    };


    useEffect(() => {

        const panel = panelRef.current;
        const overlay = overlayRef.current;
        const content = contentRef.current;

        if (!panel || !overlay || !content) return;
        

        if (isOpen) {
            gsap.killTweensOf([
                panel,
                overlay,    
                content
            ]);

            gsap.set(panel, {
                xPercent: 100
            });

            gsap.set(overlay, {
                autoAlpha: 0,
                visibility: 'visible',
                pointerEvents: 'auto'
            });

            gsap.set(content, {
                opacity: 0,
                y: 20
            });

            const timeline = gsap.timeline();

            timeline
                .to(overlay, {
                    autoAlpha: 1,
                    duration: .35,
                    ease: "power2.out"
                })
                .to(panel, {
                    xPercent: 0,
                    duration: .4,
                    ease: "power4.out"
                }, "-=.2")
                .to(content, {
                    opacity: 1,
                    y: 0,
                    duration: .85,
                    ease: "power2.out"
                }, "-=.3")
        } else {
            const tl = gsap.timeline();

            tl.to(content, {
                opacity: 0,
                y: 15,
                duration: .2,
                ease: "power2.in"
            })
                .to(panel, {
                    xPercent: 100,
                    duration: .5,
                    ease: "power4.inOut"
                })
                .to(overlay, {
                    autoAlpha: 0,
                    duration: .3,
                    ease: "power2.out"
                }, "-=.25");
        }

        return () => {
            gsap.killTweensOf([panel, overlay, content]);
        }; 

    }, [isOpen]);

    return (
        <>
            <div className={`search-overlay ${isOpen ? 'open' : ''}`} onClick={onClose} ref={overlayRef}>
                <aside
                    className={`search-panel ${isOpen ? 'open' : ''}`}
                    onClick={(event) => event.stopPropagation()}
                    ref={panelRef}
                    data-lenis-prevent
                >
                    <header className='search-panel-header'>
                        <h2>Buscar</h2>
                        <button className='search-panel-close' onClick={onClose} aria-label='Fechar Pesquisa'>
                            <FiX />
                        </button>
                    </header>

                    <div className='search-panel-content' ref={contentRef}>
                        <div className='search-input-wrapper'>
                            <FiSearch />
                            <input
                                type="text"
                                ref={inputRef}
                                value={searchTerm}
                                onChange={(event) => setSearchTerm(event.target.value)}
                                placeholder="Pesquisar por produtos..."
                            />
                            {searchTerm && (
                                <button
                                    className='search-input-clear'
                                    onClick={() => setSearchTerm('')}
                                    aria-label='Limpar pesquisa'
                                >
                                    <FiX />
                                </button>
                            )}
                        </div>
                        {!searchTerm && (
                            <section className='search-section'>
                                <span className='search-section-label'>BUSCA POPULARES</span>

                                <div className='search-popular'>
                                    {popularSearches.map(term => (
                                        <button key={term} onClick={() => handlePopularSearch(term)}>
                                            {term}
                                            <FiArrowRight />
                                        </button>
                                    ))}
                                </div>
                            </section>
                        )}
                        {searchTerm && (
                            <section className='search-section'>
                                <span className='search-section-label'>
                                    RESULTADOS
                                </span>
                                {results.length > 0 ? (
                                    <div className='search-results'>
                                        {results.map(product => (
                                            <button
                                                key={product.id}
                                                className='search-result'
                                                onClick={() => handleProductClick(product.id)}
                                            >
                                                <img src={product.image} alt={product.name} />
                                                <div>
                                                    <h3>{product.name}</h3>
                                                    <span>{product.color}</span>
                                                </div>
                                                <FiArrowRight />
                                            </button>

                                        ))}
                                    </div>
                                ) : (
                                        <div className='search-empty'>
                                            <PiSmileySadLight size={48} />
                                            <h3>Nenhum produto encontrado.</h3>
                                            <p>Tente outro termo de pesquisa.</p>
                                        </div>
                                )}
                                {results.length > 0 && (
                                  /*  <button className='search-see-all' onClick={handleSeeAll}>
                                        Ver todos os produtos
                                        <FiArrowRight />
                                    </button> */
                                    <Button text="Ver todos os produtos" onClick={handleSeeAll} />
                                )}
                            </section>
                        )}
                    </div>
                </aside>
            </div>
        </>
    )
}

export default SearchPanel;