import '../styles/shop.css'
//import gsap from 'gsap'
import { useEffect, useRef } from 'react';

import { useState, useMemo } from 'react';
import { allProducts } from '../services/products';

import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer'

import ShopHero from '../components/Shop/ShopHero';
import ShopCategories from '../components/Shop/ShopCategories';
import ShopToolbar from '../components/Shop/ShopToolbar';
import ShopProducts from '../components/Shop/ShopProducts';
import ShopPagination from '../components/Shop/ShopPagination';
import ShopSale from '../components/Shop/ShopSale';

function Shop() {

    const toolbarRef = useRef(null);

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [sortBy, setSortBy] = useState("relevant");
    const [currentPage, setCurrentPage] = useState(1);
    const [onlyDiscounted, setOnlyDiscounted] = useState(false);

    const productsPerPage = 8;

    const categories = useMemo(() => {
        return [
            ...new Set(
                allProducts.map(product => product.category)
            )
        ];
    }, []);

    const filteredProducts = useMemo(() => {
        let result = [...allProducts];


        //Pesquisa
        if (searchTerm.trim() !== "") {
            const search = searchTerm.toLowerCase();

            result = result.filter(product =>
                product.name.toLowerCase().includes(search) ||
                product.color.toLowerCase().includes(search) ||
                product.category.toLowerCase().includes(search)
            )
        }

        // Categoria
        if (selectedCategory !== "all") {
            result = result.filter(product =>
                product.category === selectedCategory
            );
        }

        // Promoções
        if (onlyDiscounted) {
            result = result.filter(product =>
                product.oldPrice
            );
        }

        // Ordenação
        switch (sortBy) {
            case "price-low":
                result.sort(
                    (a, b) => a.price - b.price
                );
                break;
            case "price-high":
                result.sort(
                    (a, b) => b.price - a.price
                );
                break;
            case "name":
                result.sort(
                    (a, b) => a.name.localeCompare(b.name)
                );
                break;
            default:
                break;
        }

        return result
    }, [searchTerm, selectedCategory, sortBy, onlyDiscounted]);

    const indexOfLastProducts = currentPage * productsPerPage;

    const indexOfFirstProduct = indexOfLastProducts - productsPerPage;

    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProducts);

    const totalPages = Math.ceil(
        filteredProducts.length / productsPerPage
    );

    /*const handleCategoryShortcut = (category) => {
        setSearchTerm("");
        setSortBy("relevant");
        setCurrentPage(1);
        setSelectedCategory(category);
        requestAnimationFrame(() => {
            toolbarRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    };

    const handleProductsShortcut = () => {
        setCurrentPage(1);
        requestAnimationFrame(() => {
            toolbarRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }; */

    const handleSaleClick = () => {
        setSearchTerm("");
        setSelectedCategory("all");
        setSortBy("relevant");
        setOnlyDiscounted(true);
        setCurrentPage(1);

        requestAnimationFrame(() => {
            toolbarRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    }

    const handleClearSale = () => {
        setOnlyDiscounted(false);
        setCurrentPage(1);
    }

    const handleClearCategory = () => {
        setSelectedCategory("all");
        setCurrentPage(1);
    }

    const handleCategoryAction = (action) => {
        setOnlyDiscounted(false);

        setSearchTerm("");
        setSortBy("relevant");
        setCurrentPage(1);

        if (action === "Air Max") {
            setSelectedCategory("Air Max");
        }

        if (action === "running") {
            setSelectedCategory("running")
        }

        if (action === "recent") {
            setSelectedCategory("all");
        }

        requestAnimationFrame(() => {
            toolbarRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        });
    };


    const handlePageChange = (page) => {
        window.scrollTo({
            top: toolbarRef.current.offsetTop - 80,
            behavior: "smooth"
        });

        setCurrentPage(page);
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, selectedCategory, sortBy]);

    return (
        <>
            <NavBar />
            <main className='shop-page'>
                <ShopHero />
                <ShopCategories
                    onCategoryAction={handleCategoryAction}
                />
                <ShopToolbar
                    toolbarRef={toolbarRef}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedCategory={selectedCategory}
                    setSelectedCategory={setSelectedCategory}
                    sortBy={sortBy}
                    setSortBy={setSortBy}
                    categories={categories}
                    onlyDiscounted={onlyDiscounted}
                    onClearSale={handleClearSale}
                    onClearCategory={handleClearCategory}
                />
                <ShopProducts products={currentProducts} />
                <ShopPagination
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                    />
                <ShopSale
                    onSaleClick={handleSaleClick}
                    onlyDiscounted={onlyDiscounted}
                    setOnlyDiscounted={setOnlyDiscounted}
                />
            </main>
            <Footer />
        </>    
    )
}

export default Shop;