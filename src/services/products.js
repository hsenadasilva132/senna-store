import DunkLow from '../images/DunkLow.png'
import dunk from '../images/dunk.png'
import dunk2 from '../images/dunk2.png'

import AirmaxPlus from '../images/AirmaxPlus.png'

import Airmax97 from '../images/Airmax97.png'
import Airmax97_2 from '../images/Airmax97-2.png'
import Airmax97_3 from '../images/Airmax97-3.png'

import NikehotStep from '../images/NikeHotStep2.png'
import noctaXNikeHotStep from '../images/Nocta X hot step 2.png'  

import AirmaxPlusAzul from '../images/AirmaxPlusAzul.png'

import AirmaxPretoBranco from '../images/AirmaxPlusPretoBranco.png'
import AirmaxPretoBranco2 from '../images/AirmaxPlusPretoBranco2.png'
import AirmaxPretoBranco3 from '../images/AirmaxPlusPretoBranco3.png'

import AirmaxPreto from '../images/AirmaxPreto.png'

import NikeMercurial from '../images/Nike-Mercurial-Superfly.webp'
import NikeMercurial2 from '../images/nikeMercurial2.webp'

import NikePhantomVenom from '../images/Nike-Phantom-Venom-Academy.webp'
import NikeUnited from '../images/Nike-United-Jr_-Mercurial-Vapor-16-Academy.webp'
import NikeVaporEdge from '../images/Nike-Vapor-Edge-Speed-360.webp'

import AirZoomBrancoPreto from '../assets/imagesCategory/Race/NikeAirZoom-PretoBranco.webp'
import AirZoomVermelho from '../assets/imagesCategory/Race/NikeAirZoomVapor-Vermelho.webp'
import AirZoomBrancoVerde from '../assets/imagesCategory/Race/NikeAirZoom-BrancoVerde.webp'
import AirZoomLaranjaRoxo from '../assets/imagesCategory/Race/NikeAirZoom-laranjaRoxo.webp'

//import AirMaxBrancoDourado from '../assets/imagesCategory/Training/NikeAirMaxBrancoDourado.webp'
import NikeFlexExperience from '../assets/imagesCategory/Training/NikeFlexExperience.webp'
import NikeMotiva from '../assets/imagesCategory/Training/NikeMotiva.webp'
import NikeFreeMetcon from '../assets/imagesCategory/Training/NikeFreeMetcon6.webp'

import nikeInitiator from '../assets/imagesTrending/nikeInitiator.webp';
import nikeVomero18 from '../assets/imagesTrending/nikeVomero18.webp';
import nikePhantom6 from '../assets/imagesTrending/nikePhantom6.webp';
import nikeRevolution7 from '../assets/imagesTrending/nikeRevolution7.webp';

import Lifestyle1 from '../images/lifeStyle1.webp'
import Lifestyle2 from '../images/lifeStyle2.webp'
import Lifestyle3 from '../images/lifeStyle3.webp'

export const products = [
        {
            id: 1,
            slug: "dunk-low-branco-e-cinza",
            name: "DunkLow",
            category: "casual",
            collection: "Dunk",
            color: "Branco e Cinza",
            price: 287.99,
            oldPrice: 359.99,
            sale: true,
            image: DunkLow,
            images: [
                DunkLow,
                dunk,
                dunk2
            ],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [40, 41, 42],
            stock: 25,
            description: "Solado de borracha com o clássico ponto de giro \
            do basquete, entregando aderência máxima e durabilidade."
        },
        {
            id: 2,
            slug: "air-max-plus-branco",
            name: "Air Max",
            category: "Air Max",
            collection: "Air max",
            color: "Branco",
            price: 1039.99,
            oldPrice: 1299.99,
            sale: true,
            image: AirmaxPlus,
            images: [AirmaxPlus],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40, 41],
            stock: 16,
            description: `Conhecido carinhosamente como "TN" ou "Tubarão", \
            é a definição do estilo arrojado dos anos 90`
        },
        {
            id: 3,
            slug: "air-max-97-branco",
            name: "Air Max 97",
            category: "Air Max",
            collection: "Air max",
            color: "Branco",
            price: 699.99,
            sale: false,
            image: Airmax97,
            images: [
                Airmax97,
                Airmax97_2,
                Airmax97_3
            ],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40, 41, 42],
            stock: 11,
            description: "Inspirado nos trens-bala japoneses, o Nike Air Max 97 \
            é um clássico atemporal que une velocidade e sofisticação."
        },
        {
            id: 4,
            slug: "nocta-x-nike-hot-step-2",
            name: "Nocta x Nike Hot Step 2",
            category: "training",
            collection: "Nocta",
            color: "Branco",
            price: 959.99,
            oldPrice: 1199.99,
            sale: true,
            image: NikehotStep,
            images: [
                NikehotStep,
                noctaXNikeHotStep
            ],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40, 41, 42],
            stock: 4,
            description: "Nascido da colaboração exclusiva entre a Nike e a NOCTA, \
            marca do artista Drake, o Hot Step 2 eleva o conceito de calçado urbano."
        }
    ]

    export const airMaxPlus = [
        {
            id: 5,
            slug: "air-max-plus-gradiente-azul-e-preto",
            name: "Air Max",
            category: "Air Max",
            collection: "Air max",
            color: "Gradiente Azul e Preto",
            price: 1299.99,
            sale: false,
            image: AirmaxPlusAzul,
            images: [AirmaxPlusAzul],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [40, 41, 42],
            stock: 8,
            description: "O contraste do gradiente azul com as garras pretas \
            cria um efeito dinâmico e futurista."
        },
        {
            id: 6,
            slug: "air-max-plus-preto-e-branco",
            name: "Air Max",
            category: "Air Max",
            collection: "Air max",
            color: "Preto e Branco",
            price: 1299.99,
            sale: false,
            image: AirmaxPretoBranco,
            images: [
                AirmaxPretoBranco,
                AirmaxPretoBranco2,
                AirmaxPretoBranco3
            ],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 42],
            stock: 17,
            description: `A combinação monocromática ressalta cada detalhe do design \
            "Tubarão" de forma limpa e moderna.`
        },
        {
            id: 7,
            slug: "air-max-plus-preto",
            name: "Air Max",
            category: "Air Max",
            collection: "Air max",
            color: "Preto",
            price: 1299.99,
            sale: false,
            image: AirmaxPreto,
            images: [AirmaxPreto],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40],
            stock: 6,
            description: `O visual todo preto destaca as texturas, o brilho das garras \
            de TPU e o clássico logo "TN" amarelo na lateral.`
        }
]

export const categoryFootball = [
    {
        id: 8,
            slug: "nike-mercurial-superfly",
            name: "Nike Mercurial",
            category: "football",
            collection: "Mercurial",
            color: "Branco",
            price: 399.99,
            oldPrice: 499.99,
            sale: true,
            image: NikeMercurial,
            images: [
                NikeMercurial,
                NikeMercurial2
            ],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40],
            stock: 10,
            description: `chuteira de alta performance desenvolvida para velocidade e agilidade.`
    },
    {
        id: 9,
            slug: "nike-phantom-venom-academy",
            name: "Nike Phantom Venom",
            category: "football",
            collection: "Phantom",
            color: "Verde",
            price: 699.99,
            sale: false,
            image: NikePhantomVenom,
            images: [NikePhantomVenom],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40],
            stock: 10,
            description: `chuteira de alta performance desenvolvida para velocidade e agilidade.`
    },
    {
        id: 10,
            slug: "nike-united-mercurial-vapor-16",
            name: "Nike United Vapor 16",
            category: "football",
            collection: "Mercurial",
            color: "Verde",
            price: 359.99,
            oldPrice: 449.99,
            sale: true,
            image: NikeUnited,
            images: [NikeUnited],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40],
            stock: 10,
            description: `chuteira de alta performance desenvolvida para velocidade e agilidade.`
    },
    {
        id: 11,
            slug: "nike-vapor-edge-speed-360",
            name: "Nike Vapor Edge",
            category: "football",
            collection: "Edge",
            color: "Gradiente Branco, Rosa e Vermelho",
            price: 899.99,
            sale: false,
            image: NikeVaporEdge,
            images: [NikeVaporEdge],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40],
            stock: 10,
            description: `chuteira de alta performance desenvolvida para velocidade e agilidade.`
    }
]

export const categoryRunning = [
    {
        id: 12,
            slug: "nike-air-zoom-preto-branco",
            name: "Nike AirZoom",
            category: "running",
            collection: "AirZoom",
            color: "Preto e Branco",
            price: 649.99,
            sale: false,
            image: AirZoomBrancoPreto,
            images: [
                AirZoomBrancoPreto],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40],
            stock: 10,
            description: "Tênis de corrida versátil, cabedal em mesh preto com logo branco e amortecimento Air Zoom para treinos diários."
    },
    {
        id: 13,
            slug: "nike-air-zoom-vapor-11-vermelho",
            name: "Nike AirZoom Vapor 11",
            category: "running",
            collection: "AirZoom",
            color: "Vermelho",
            price: 899.99,
            image: AirZoomVermelho,
            images: [
                AirZoomVermelho
            ],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40],
            stock: 10,
            description: "Tênis de performance com foco em velocidade, cabedal vermelho texturizado e entressola Air Zoom para resposta rápida."
    },
    {
        id: 14,
            slug: "nike-air-zoom-pegasus-41-branco-verde",
            name: "Nike AirZoom Pegasus 41",
            category: "running",
            collection: "AirZoom",
            color: "Branco e Verde",
            price: 799.99,
            oldPrice: 999.99,
            sale: true,
            image: AirZoomBrancoVerde,
            images: [
                AirZoomBrancoVerde
            ],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40, 41, 42],
            stock: 10,
            description: "Modelo clássico da linha Pegasus, cabedal em mesh respirável, entressola responsiva e detalhes em verde."
    },
    {
        id: 15,
            slug: "nike-air-zoom-pegasus-41-branco-laranja-roxo",
            name: "Nike AirZoom Pegasus 41",
            category: "running",
            collection: "AirZoom",
            color: "Branco, Laranja e Roxo",
            price: 999.99,
            image: AirZoomLaranjaRoxo,
            images: [
                AirZoomLaranjaRoxo
            ],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40],
            stock: 10,
            description: "Tênis de corrida com amortecimento ReactX e Zoom Air, design leve e moderno em branco com detalhes laranja e roxo."
    }
]

export const categoryTraining = [
   /* {
    id: 16,
            slug: "nike-air-max-branco-dourado",
            name: "Nike Airmax",
            category: "training",
            collection: "Airmax",
            color: "Branco e Dourado",
            price: 1299.99,
            image: AirMaxBrancoDourado,
            images: [
                AirMaxBrancoDourado
            ],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40],
            stock: 10,
            description: "Modelo moderno com unidade Air Max visível no calcanhar, cabedal off-white e logo dourado para estilo e conforto."
    }, */
    {
    id: 17,
            slug: "nike-flex-experience-rn-branco-preto",
            name: "Nike Flex Experience RN",
            category: "training",
            collection: "Flex Experience",
            color: "Branco e Preto",
            price: 349.99,  
            sale: false,
            image: NikeFlexExperience,
            images: [
                NikeFlexExperience
            ],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40],
            stock: 10,
            description: "Tênis leve e flexível, ideal para treinos leves e cardio, com cabedal em mesh branco e detalhes em preto."
    },
    {
    id: 18,
            slug: "nike-motiva-cinza-prata",
            name: "Nike Motiva",
            category: "training",
            collection: "Motiva",
            color: "Cinza e Prata",
            price: 899.99,
            sale: false,
            image: NikeMotiva,
            images: [
                NikeMotiva
            ],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40],
            stock: 10,
            description: "Tênis de corrida com cabedal cinza texturizado, entressola branca espessa e logo metálico prateado, oferecendo amortecimento e estabilidade."
    },
    {
    id: 19,
            slug: "nike-free-metcon-6-rosa-roxo",
            name: "Nike Free Metcon 6",
            category: "training",
            collection: "Metcon",
            color: "Gradiente Rosa e Roxo",
            price: 799.99,
            oldPrice: 999.99,
            sale: true,
            image: NikeFreeMetcon,
            images: [
                NikeFreeMetcon
            ],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40],
            stock: 10,
            description: "Tênis de treino versátil com cabedal cinza e detalhes coloridos no calcanhar, projetado para estabilidade e respirabilidade."
    }
]

export const productsTrending = [
   {
    id: 20,
            slug: "nike-initiator-branco",
            name: "Nike Initiator",
            category: "casual",
            collection: "Initiator",
            color: "Branco",
            price: 699.99,
            sale: false,
            image: nikeInitiator,
            images: [
                nikeInitiator
            ],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40],
            stock: 4,
            description: "Tênis de treino versátil com cabedal cinza e detalhes coloridos no calcanhar, projetado para estabilidade e respirabilidade."
    },
    {
    id: 21,
            slug: "nike-vomero-18-laranja",
            name: "Nike Vomero 18",
            category: "running",
            collection: "Vomero",
            color: "Laranja",
            price: 999.99,
            sale: false,
            image: nikeVomero18,
            images: [
                nikeVomero18
            ],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40],
            stock: 2,
            description: "Tênis de treino versátil com cabedal cinza e detalhes coloridos no calcanhar, projetado para estabilidade e respirabilidade."
    },
    {
    id: 22,
            slug: "nike-phantom-6-verde",
            name: "Nike Phantom 6",
            category: "football",
            collection: "Phantom",
            color: "Verde",
            price: 399.99,
            sale: false,
            image: nikePhantom6,
            images: [
                nikePhantom6
            ],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40],
            stock: 16,
            description: "Tênis de treino versátil com cabedal cinza e detalhes coloridos no calcanhar, projetado para estabilidade e respirabilidade."
    },
    {
    id: 23,
            slug: "nike-revolution-7-branco",
            name: "Nike Revolution 7",
            category: "running",
            collection: "Revolution",
            color: "Branco",
            price: 303.99,
            oldPrice: 379.99,
            sale: true,
            image: nikeRevolution7,
            images: [
                nikeRevolution7
            ],
            lifestyleImages: [
                Lifestyle1,
                Lifestyle2,
                Lifestyle3
            ],
            sizes: [38, 39, 40],
            stock: 10,
            description: "Tênis de treino versátil com cabedal cinza e detalhes coloridos no calcanhar, projetado para estabilidade e respirabilidade."
    }
]
    
export const allProducts = [
    ...products,
    ...airMaxPlus,
    ...categoryFootball,
    ...categoryRunning,
    ...categoryTraining,
    ...productsTrending
]