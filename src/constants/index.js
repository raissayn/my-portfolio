

import javaIcon from "../assets/tech/javaSimbolo.png";
import gitIcon from "../assets/tech/gitSimbolo.png";
import cmIcon from "../assets/tech/Cmsimbolo.png";
import pyIcon from "../assets/tech/PySimbolo.png";
import idIcon from "../assets/tech/IdSimbolo.png";
import apIcon from "../assets/tech/ApSimbolo.png";
import carrent from "../assets/tech/herobg.png";
import jobit from "../assets/tech/tailwind.png";
import tripguide from "../assets/tech/typescript.png";
import sisIcon from "../assets/tech/sis.png";
import uniIcon from "../assets/tech/unifal.png";
import profIcon from "../assets/tech/prof.png";
import studyIcon from "../assets/tech/study.png";

export const navLinks = [
    {
        id: "work",
        title: "Projetos",
    },
    {
        id: "experience",
        title: "Sobre",
    },
    {
        id: "skills",
        title: "Habilidades",
    },
];



const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Job IT",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Trip Guide",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "supabase",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];
{/* não usando ainda  */}
const abilities = [
    {
        imgPath: "/images/linkedin.png",
        title : "Quality Focus",
        desc: "minha descrição"
    },
    {
        imgPath: "/images/logos/company-logo-1.png",
        title : "Quality Focus 2",
        desc: "minha descrição"
    },
    {
        imgPath: "/images/logos/company-logo-1.png",
        title : "Quality Focus 3",
        desc: "minha descrição"
    },
]

const expCards = [
    {
        imgPath: "/images/review.png",
        logoPath: uniIcon,
        title: "Estudante de Ciência da Computação na Universidade Federal de Alfenas",
        date: "2024 - 2027",
        responsibilities: [
            "O bacharelado em Ciência da Computação tem contribuído para o aprimoramento dos meus conhecimentos" +
            " teóricos e práticos, estimulando o desenvolvimento do pensamento lógico e crítico. Atualmente, no 4º período, possuo uma base sólida em abstração e resolução de problemas."
        ]
    },
    {
        imgPath: "/images/review.png",
        logoPath: profIcon,
        title: "Professora Voluntária – Projeto Desenvolvimento Humano: Saúde, Educação e Trabalho",
        date: "março 2025 - julho 2025",
        responsibilities: [
            "A atuação como professora voluntária contribuiu para o desenvolvimento das minhas soft skills, " +
            "como trabalho em equipe, comunicação e habilidades de ensino, por meio da capacitação de crianças e adolescentes em situação de vulnerabilidade social em informática básica e lógica de programação."
        ]
    },
    {
        imgPath: sisIcon,
        logoPath: sisIcon,
        title: " Bolsista PET TECHSUS",
        date: "Março 2024 - Atualmente",
        responsibilities: [
            "Por meio da minha participação no PET TechSUS, tenho a oportunidade de vivenciar a metodologia Scrum. Atuando no papel de Scrum Master em meu time, venho adquirindo um conhecimento sólido em Scrum e métodos ágeis," +
            " além de exercer a função de facilitadora de processos, aplicando soft skills como liderança servidora, comunicação, e resolução de conflitos."
        ]
    },
    {
        imgPath: "/images/review.png",
        logoPath: studyIcon,
        title: "Busca constante de aprendizados",
        date: "",
        responsibilities: [
            "Estou em constante busca por aprimoramento profissional, participando de bootcamps, palestras e outras iniciativas de capacitação," +
            " sempre em busca de novas oportunidades de aprendizado e desenvolvimento contínuo."
        ]
    },
];
const techStackIcons = [
    {
        name: "Java",
        icon: javaIcon,
        percentage: 80,
    },
    {
        name: "Python",
        icon: pyIcon,
        percentage: 38,
    },
    {
        name: "C++",
        icon: cmIcon,
        percentage: 60,
    },
    {
        name: "Git & GitHub",
        icon: gitIcon,
        percentage: 98,
    },
    {
        name: "Integração de APIs",
        icon: apIcon,
        percentage: 80,
    },
    {
        name: "VS Code & Intellij IDEA",
        icon: idIcon,
        percentage: 100,
    },
];

export { projects, abilities,  expCards, techStackIcons };