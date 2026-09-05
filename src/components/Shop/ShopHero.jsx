import '../../styles/shopHero.css'

//import Button from '../layout/button'

function ShopHero() {
    return (
        <section className='shop-hero'>
            <div className='shop-hero-content'>
                <span className='shop-label'>Nova Coleção</span>

                <h1>
                    Performance.
                    <br />
                    Estilo.
                    <br />
                    Tecnologia.
                </h1>

                <p>Descubra toda a seleção de modelos Nike
                    desenvolvidos para corrida, treino,
                    futebol e casual.
                </p>

                {/* <Button text="Explorar Coleção"/> */}
            </div>

            {/* <div className='shop-hero-bg'>
                <div className='blur-circle one'/>
                <div className='blur-circle two'/>
            </div> */}
        </section>
    )
}

export default ShopHero;