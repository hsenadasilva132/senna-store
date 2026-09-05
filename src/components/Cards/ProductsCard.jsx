import bagIcon from '../../assets/icons/cart.svg'
import '../../styles/productsCard.css'
import { formatPrice } from '../../utils/formatPrice';

import { useNavigate } from 'react-router-dom';

function ProductsCard({ name, color, price, oldPrice, sale, image, id, slug }) {

    //console.log(slug)

    const navigate = useNavigate();

    const discountPercentage = sale && oldPrice ? Math.round(((oldPrice - price) / oldPrice) * 100) : 0;    

    return (
        <article className="product-card" onClick={() => navigate(`/product/${id}`)}>
            <div className='product-image-wrapper'>
                <img
                    src={image}
                    alt={name}
                    className="product-bg"
                />
            </div>
            
            {sale && oldPrice &&(
                <span className='product-sale'>
                    -{discountPercentage}%
                </span>
            )}
            <div className="product-content">

            <div className="product-info">
                <h3>{name}</h3>
                <span>{color}</span>
            </div>

                <div className="product-footer">
                    <div className='product-prices'>
                        {sale && oldPrice && (
                            <span className='product-old-price'>
                                {formatPrice(oldPrice)}
                            </span>
                        )}
                        <strong className={sale ? "sale-price" : ""}>
                            {formatPrice(price)}
                        </strong>
                </div>
                    <button className="product-cart" onClick={(event) => { event.stopPropagation(); }}>
                    <img src={bagIcon} alt={slug} />
                </button>
            </div>

            </div>

        </article>
    )
}

export default ProductsCard;