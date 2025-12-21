import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

import javaIcon from "../assets/tech/javaSimbolo.png";
import gitIcon from "../assets/tech/gitSimbolo.png";
import cmIcon from "../assets/tech/Cmsimbolo.png";

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

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const counterItems = [
    {value: 10, suffix: "+", label:"Years of Experience"},
    {value: 200, suffix: "+", label:"Years of Experience"},
    {value: 190, suffix: "+", label:"Years of Experience"},
    {value: 110, suffix: "%", label:"Years of Experience"},
]
const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
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
        logoPath: "/images/logos/company-logo-1.png",
        title: "Estudante de Ciência da Computação na Universidade Federal de Alfenas",
        date: "2024 - 2027",
        responsibilities: [
            "O bacharelado em Ciência da Computação tem contribuído para o aprimoramento dos meus conhecimentos" +
            " teóricos e práticos, estimulando o desenvolvimento do pensamento lógico e crítico. Atualmente, no 4º período, possuo uma base sólida em abstração e resolução de problemas."
        ]
    },
    {
        imgPath: "/images/review.png",
        logoPath: "/images/logos/company-logo-1.png",
        title: "Professora Voluntária – Projeto Desenvolvimento Humano: Saúde, Educação e Trabalho",
        date: "março 2025 - julho 2025",
        responsibilities: [
            "A atuação como professora voluntária contribuiu para o desenvolvimento das minhas soft skills, " +
            "como trabalho em equipe, comunicação e habilidades de ensino, por meio da capacitação de crianças e adolescentes em situação de vulnerabilidade social em informática básica e lógica de programação."
        ]
    },
    {
        imgPath: "/images/review.png",
        logoPath: "/images/logos/company-logo-1.png",
        title: "sla",
        date: "Março 2024 - Atualmente",
        responsibilities: [
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        ]
    },
    {
        imgPath: "/images/review.png",
        logoPath: "/images/logos/company-logo-1.png",
        title: "Busca constante de aprendizados",
        date: "",
        responsibilities: [
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
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
        name: "Git & GitHub",
        icon: gitIcon,
        percentage: 98,
    },
    {
        name: "C++",
        icon: cmIcon,
        percentage: 60,
    },
    {
        name: "VS Code",
        icon: "/assets/tech/node.png",
        percentage: 100,
    },
    {
        name: "Node",
        icon: "/assets/tech/node.png",
        percentage: 10,
    },
];

export { services, technologies, testimonials, projects, counterItems, abilities,  expCards, techStackIcons };