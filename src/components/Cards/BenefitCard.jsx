import '../../styles/benefitCard.css'

function BenefitCard({ icon, title, text }) {
    return (
        <div>
            <article className="benefit-card">
                <div className="benefit-icon">
                    <img src={icon} alt={title} />
                </div>

                <h3>{title}</h3>

                <p>{text}</p>
            </article>
        </div>
    )
}

export default BenefitCard;