import '../../styles/categoryProducts.css';
import Button from '../layout/button';

import ProductsCard from '../Cards/ProductsCard'
import { allProducts } from '../../services/products';

import { useNavigate } from 'react-router-dom';

function CategoryProducts({ category }) {

/*    console.log("Categoria recebida:", category);

    console.log("Produtos:", allProducts);

    allProducts.forEach(product => {
    console.log(product.category);
    }); */

    const filteredProducts = allProducts
    .filter(product => product.category === category)
    .slice(0, 4);
        
    const navigate = useNavigate();

    const goCollection = () => {
        navigate('/shop');
    }

    return (
        <section className="category-products">
        <div className="category-products-header">
            <span>Relacionados</span>
            <h2>Modelos da categoria</h2>

            <p>Os principais modelos para quem procura
            desempenho, conforto e estilo.</p>
        </div>

        <div className="category-products-grid">
                {filteredProducts.map((product) => (
                    <ProductsCard
                        key={product.id}
                        id={product.id}
                        slug={product.slug}
                        name={product.name}
                        color={product.color}
                        price={product.price}
                        image={product.image}
                    />
            ))}
        </div>
            
            <div className="category-products-button">
                <Button text="Ver coleção completa" onClick={goCollection} />
            </div>
    </section>
    )
}

export default CategoryProducts;