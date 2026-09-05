import '../../styles/lifeStyle.css'
import ProductsCard from '../Cards/ProductsCard'
import { allProducts } from '../../services/products';

function LifeStyle({ product }) {

    const sameCategory = allProducts
        .filter(item =>
            item.category === product.category &&
            item.id !== product.id
    );
    
    const fallbackProducts = allProducts.filter(
        item =>
            item.category !== product.category &&
            item.id !== product.id
    );

    const relatedProducts = [
        ...sameCategory,
        ...fallbackProducts
    ].slice(0, 4);
 
    
    if (!product?.lifestyleImages) {
        return null
    }


    return (

    <>
        <section className='lifestyle-gallery'>

            
            <div className='lifestyle-large'>
                <img src={product.lifestyleImages[0]} alt="" />

                <div className='lifestyle-overlay'>
                    <span>Air Max Plus</span>

                    <h3>Conforto que acompanha sua rotina</h3>
                </div>
            </div>

            <div className='lifestyle-small'>
                <img src={product.lifestyleImages[1]} alt="" />

                <div className='small-overlay'>
                    <h4>Leveza</h4>
                </div>
            </div>

            <div className='lifestyle-small'>
                <img src={product.lifestyleImages[2]} alt="" />

                <div className='small-overlay'>
                    <h4>Estilo Urbano</h4>
                </div>
            </div>
            </section>
            
            <section className='related-products'>
                <div className='related-header'>
                    <span>Você também pode gostar</span>
                    <h2>Produtos Relacionados</h2>
                </div>

                <div className='related-grid'>
                    {relatedProducts.map((product) => (
                        <ProductsCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            color={product.color}
                            price={product.price}
                            image={product.image}
                        />
                    ))}
                </div>

            </section>
    </>
 )
}

export default LifeStyle;