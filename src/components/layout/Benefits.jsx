import "../../styles/benefits.css"
import BenefitCard from "../../components/Cards/BenefitCard";

import envioIcon from "../../assets/icons/envio.svg";
import pagamentoIcon from "../../assets/icons/pagamento.svg";
import freteIcon from "../../assets/icons/frete.svg";
import devolucaoIcon from "../../assets/icons/devolucao.svg";


function Benefits() {


    const benefits = [
        {
            icon: envioIcon,
            title: "Envio Rápido",
            text: "Receba seus pedidos sem esperar, porque tempo é essencial."
        },
        {
            icon: pagamentoIcon,
            title: "Pagamento",
            text: "Diversas formas de pagamento, sempre com segurança garantida."
        },
        {
            icon: freteIcon,
            title: "Frete Grátis",
            text: "Entrega gratuita para você aproveitar ainda mais"
        },
        {
            icon: devolucaoIcon,
            title: "Devolução",
            text: "Troque ou devolva com facilidade, sem complicações"
        }
    ]


    return (
        <section className="benefits">
            <div className="benefits-container">

                <div className="benefits-grid">
                    {benefits.map((item) => (
                        <BenefitCard
                            key={item.title}
                            icon={item.icon}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Benefits;