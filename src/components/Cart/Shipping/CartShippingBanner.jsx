import '../../../styles/shippingBanner.css'

function CartShippingBanner() {
    return (
        <section className="shipping-banner">
            <div className='banner-background' />

            <div className='banner-content'>
                <span className='banner-label'>
                    ENTREGA PROTEGIDA
                </span>
                <h2>Acompanhe cada etapa <br /> em tempo real</h2>
                <p>Notificações automáticas do pedido até a porta de
                    sua casa.
                </p>
            </div>
        </section>
    )
}

export default CartShippingBanner;  