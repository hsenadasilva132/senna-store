import '../../styles/categoryHero.css'

import runningHero from '../../images/running-hero.jpg'
import footballHero from '../../images/football-hero.jpg'
import trainingHero from '../../images/training-hero.jpg'
import casualHero from '../../images/casual-hero.jpg'

import NavBar from '../layout/NavBar'


function CategoryHero({ category }) {
    
    const heroContent = {
        running: {
            subtitle: "Corrida",
            title: "Corra mais longe.",
            description: "Performance, conforto e velocidade para qualquer percurso.",
            image: runningHero
        },
        football: {
            subtitle: "Futebol",
            title: "Domine cada jogada.",
            description: "Controle, estabilidade e precisão dentro de campo.",
            image: footballHero
        },
        training: {
            subtitle: "Treino",
            title: "Supere seus limites.",
            description: "Modelos criados para acompanhar qualquer treino.",
            image: trainingHero
        },
        casual: {
            subtitle: "Casual",
            title: "Para o seu dia a dia.",
            description: "Projetados para serem usados diariamente, oferecendo conforto durante longas horas de uso.",
            image: casualHero
        }
    }

    const data = heroContent[category];
    
    return (
        <section className="category-hero" >
                <img
                src={data.image}
                alt={data.subtitle}
                className='category-hero-bg'
                fetchPriority='heigh'
                loading='eager'
                decoding='async'
            />
            <NavBar />
            <div className="category-hero-overlay" />
            
            <div className="category-hero-content">
                <span>{data.subtitle}</span>
                <h1>{data.title}</h1>
            <p>{data.description}</p>
            </div>
        </section>
    )
}

export default CategoryHero;