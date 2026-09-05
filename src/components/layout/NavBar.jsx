import '../../styles/navbar.css'

import userIcon from '../../assets/icons/user.svg'
import searchIcon from '../../assets/icons/search.svg'
import bagIcon from '../../assets/icons/bag.svg'

import { FiX, FiChevronRight } from 'react-icons/fi';
import { CgMenuRightAlt } from 'react-icons/cg';

import { SlSocialLinkedin } from 'react-icons/sl';
import { IoLogoGithub, IoIosLogOut } from 'react-icons/io';


import { useNavigate } from 'react-router-dom';
import { useRef, useEffect, useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import SearchPanel from '../Search/SearchPanel'

import gsap from 'gsap'

const NAV_LINKS = [
    { label: 'Home', route: '/', hasChildren: false },
    { label: 'Shop', route: '/shop', hasChildren: true },
//    { label: 'Collections', hasChildren: true },
//    { label: 'Pages', hasChildren: true },
];

export default function NavBar() {
    const navigate = useNavigate();
    const { cartItems } = useCart();
    const { user, logout, loadingUser } = useAuth();


    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [accountOpen, setAccountOpen] = useState(false);


    const totalItems = cartItems.reduce(
        (accumulador, item) => accumulador + item.quantity, 0
    );

    const badgeRef = useRef(null);
    const accountRef = useRef(null);

    useEffect(() => {
        if (totalItems === 0) return;

        gsap.fromTo(
            badgeRef.current,
            { scale: 1 },
            {
                scale: 1.35,
                duration: .18,
                yoyo: true,
                repeat: 1,
                ease: "power1.in"
            }
        );
    }, [totalItems]);

    // Trava o scroll do body quando o menu está aberto
/*    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [menuOpen]); */

    useEffect(() => {

    const shouldLockScroll =
        menuOpen || searchOpen;

    const previousBodyOverflow =
        document.body.style.overflow;

    const previousHtmlOverflow =
        document.documentElement.style.overflow;

    if (shouldLockScroll) {

        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';

    }

    return () => {

        document.body.style.overflow =
            previousBodyOverflow;

        document.documentElement.style.overflow =
            previousHtmlOverflow;

    };
    
    }, [menuOpen, searchOpen]);
    

    const handleNavigate = (path) => {
        setMenuOpen(false);
        setAccountOpen(false);
        navigate(path);
    };

    const handleOpenSearch = () => {
        // garante que o drawer mobile não fique aberto ao mesmo tempo
        setMenuOpen(false);
        setSearchOpen(true);
    };

    const handleCloseSearch = () => {
        setSearchOpen(false);
        setSearchTerm("");
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (accountRef.current && !accountRef.current.contains(event.target)) {
                setAccountOpen(false);
            }
        }

        if (accountOpen) {
            document.addEventListener(
                'click',
                handleClickOutside
            );
        }

        return () => {
            document.removeEventListener(
                'click',
                handleClickOutside
            );
        };
    }, [accountOpen]);

    /*const menu = document.querySelector('.account-menu');

    const rect = menu.getBoundingClientRect();

    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    console.log("Retângulo do menu:", rect);
    console.log("Elemento no ponto:", document.elementFromPoint(x, y));
    console.log("x:", x, "y:", y); */

    return (
        <>
            <header className="navbar">
                <h2 className="logo" onClick={() => navigate('/')}>SennaStore</h2>

                <div className="nav-icons">
                    <div className='nav-account' ref={accountRef}>
                        <button
                        className='nav-user-button'
                        onClick={() => {
                            if (user) {
                                setAccountOpen(!accountOpen);
                            } else {
                                navigate('/login');
                            }
                        }}
                        aria-label={user ? "Abrir conta" : "Entrar"}
                    >
                        <img className="icon-user" src={userIcon} alt="user" />
                    </button>

                    {accountOpen && user && (
                        <div className='account-menu'>
                            <div className='account-menu-header'>
                                <span>Olá,</span>
                                <strong>{user.name}</strong>
                            </div>

                            <div className='account-menu-links'>
                                    <button onClick={() => { handleNavigate('/account'); console.log("Cliquei na minha conta")}}>
                                    Minha conta
                                </button>

                                <button
                                    className='account-logout'
                                    onClick={() => {
                                        logout();
                                        setAccountOpen(false);
                                        navigate('/')
                                    }}
                                > 
                                    Sair
                                    <IoIosLogOut size={24} />
                                </button>
                            </div>
                        </div>
                    )}
                    </div>
                     
                    <button
                        className='nav-search-button'
                        onClick={handleOpenSearch}
                        aria-label='Abrir pesquisa'
                    >
                        <img className="icon-search" src={searchIcon} alt="search" /> 
                    </button>
                    {totalItems > 0 && (
                        <span className="cart-count" ref={badgeRef}>
                            {totalItems}
                        </span>
                    )}
                    <img
                        className="icon-bag"
                        src={bagIcon}
                        alt="bag"
                        onClick={() => navigate("/cart")}
                    />

                    <button
                        className="hamburger-btn"
                        onClick={() => setMenuOpen(true)}
                        aria-label="Abrir menu"
                    >
                        <CgMenuRightAlt size={26} />
                    </button>
                </div>
            </header>

            {/* Overlay escuro atrás do drawer */}
            <div
                className={`mobile-menu-overlay ${menuOpen ? 'open' : ''}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Drawer lateral (mobile) */}
            <nav className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <div className="mobile-menu-header">
                    <h2 className="logo" onClick={() => handleNavigate('/')}>
                        SennaStore
                    </h2>
                    <button
                        className="mobile-menu-close"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Fechar menu"
                    >
                        <FiX />
                    </button>
                </div>

            {/*    <div className="mobile-menu-socials">
                    <FaFacebookF />
                    <FaXTwitter />
                    <FaInstagram />
                    <FaPinterestP />
                    <FaTiktok />
                    <FaYoutube />
                </div> */}

                <ul className="mobile-menu-links">
                    {NAV_LINKS.map((item) => (
                        <li
                            key={item.label}
                            onClick={() => handleNavigate(item.route)}
                        >
                            {item.label}
                            {item.hasChildren && <FiChevronRight />}
                        </li>
                    ))}
                </ul>
                {!loadingUser && (
                    user ? (
                        <div className='mobile-account'> 
                            <div className='mobile-account-user'>
                                <span>Olá,</span>
                                <strong>{user.name}</strong>
                                <small>{user.email}</small>
                            </div>
                            <div className='mobile-account-actions'>
                                <button onClick={() => handleNavigate('/account')}>
                                    Minha conta
                                </button>
                                <button onClick={() => handleNavigate('/orders')}>
                                    Meus Pedidos
                                </button>
                                <button
                                    className='mobile-account-logout'
                                    onClick={() => {
                                        logout();
                                        setMenuOpen(false);
                                        navigate('/')
                                    }}
                                >
                                    Sair
                                </button>
                            </div>
                        </div>
                    ) : (
                            <button
                                className='mobile-menu-login-btn'
                                onClick={() => handleNavigate('/login')}
                            >
                                Login / Register
                            </button>
                    )
                )}

                

                <div className="mobile-menu-footer-socials">

                    <a href="https://github.com/hsenadasilva132" target='_blank' rel="noopener noreferrer">
                        <IoLogoGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/henrique-sena-da-silva/" target='_blank' rel="noopener noreferrer">
                        <SlSocialLinkedin />
                    </a>
                    
                </div>
            </nav>

            {/* PAINEL DE BUSCA */}
            <SearchPanel
                isOpen={searchOpen}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                onClose={handleCloseSearch}
            />
        </>
    )
}
