import '../../styles/shopCategories.css'

import categories1 from '../../assets/imagesCategory/Shop/shopCategories1.webp'
import categories2 from '../../assets/imagesCategory/Shop/shopCategories2.webp'
import categories3 from '../../assets/imagesCategory/Shop/shopCategories3.webp'

import Button from '../layout/button'



function shopCategories({ onCategoryAction }) {


    const categories = [
    {
        title: "Air Max Plus",
        tag: "coleção destaque",
        description: "O clássico das ruas com amortecimento Tuned Air, \
        design icônico e personalidade marcante.",
        image: categories1,
        size: "large",
        action: "Air Max"
    },
    {
        title: "Modelos recentes",
        tag: "Lançamentos",
        description: "combinando design ousado com tecnologia, \
        garantindo conforto durante todo o dia.",
        image: categories2,
        size: "small",
        action: "recent"
    },
    {
        title: "Dia a Dia",
        tag: "Essenciais",
        description: "Conforto, leveza e estilo para qualquer momento.",
        image: categories3,
        size: "small",
        action: "running"
    }
]

    return (
        <section className="shop-categories">
            <div className="shop-categories-title">
                <span>Categorias</span>
                <h2>Explore por estilo</h2>
            </div>
            <div className="shop-categories-grid">
                {categories.map(categories => (
                    <article key={categories.title} className={`shop-category-card ${categories.size}`}>
                        <div className='shop-categories-info'>
                            <small>{categories.tag}</small>
                            <h3>{categories.title}</h3>
                            <p>{categories.description}</p>
                            <Button text="Explorar" onClick={() => onCategoryAction(categories.action)} />
                        </div>
                        <img src={categories.image} alt={categories.title} />
                    </article>
                ))}
            </div>
        </section>
    )
}

export default shopCategories