import '../../styles/shopProducts.css'

import ProductsCard from '../Cards/ProductsCard'

function ShopProducts({ products }) {


    return (
        <section className="shop-products">
            <div className='shop-products-header'>
                <div>
                    <span>Coleção</span>
                    <h2>Produtos</h2>
                </div>
                <p>{products.length} produtos</p>
            </div>

            {products.length === 0 ? (
                <div>
                    <div className='shop-empty'>
                        <h3>Nenhum produto encontrado.</h3>
                        <p>Tente pesquisar outro modelo ou remover alguns filtros</p>
                    </div>
                </div>
            ) : (
                    <div className='shop-products-grid'>
                        {products.map(product => (
                            <ProductsCard
                                key={product.id}
                                id={product.id}
                                slug={product.slug}
                                name={product.name}
                                color={product.color}
                                price={product.price}
                                oldPrice={product.oldPrice}
                                sale={product.sale}
                                image={product.image}
                            />
                        ))}
                    </div>  
            )}
        </section>
    )
}

export default ShopProducts