"use client";

import { Linkedin, Mail, MapPin, Phone, PhoneIcon } from "lucide-react";
import {
  SlDirections,
  SlFrame,
  SlNote,
  SlPeople,
  SlWallet,
} from "react-icons/sl";

export const navLinks = [
  {
    label: {
      pt: "Inicio",
      en: "Home",
    },
    url: "#hero",
  },
  {
    label: {
      pt: "Habilidades",
      en: "Skills",
    },
    url: "#skills",
  },
  {
    label: {
      pt: "Vantagens",
      en: "Benefits",
    },
    url: "#benefits",
  },
  {
    label: {
      pt: "Portfolio",
      en: "Portfolio",
    },
    url: "#portfolio",
  },
  {
    label: {
      pt: "Tecnologias",
      en: "Techs",
    },
    url: "#techs",
  },
];
export const skills = [
  {
    id: 1,
    name: "Desenvolvedor Fullstack",
    description:
      "Desenvolvimento de aplicações web com as stacks mais modernas do mercado através de Typescript, do front-end ao back-end, ou seja, sua aplicação fica pronta desde o que o usuário vê até a lógica do servidor.",
    icon: SlDirections,
  },
  {
    id: 2,
    name: "UI Designer",
    description:
      "Design de interfaces modernas, visando os aspectos mais atuais do design para não passar a ideia de que você é amador.",
    icon: SlNote,
  },
  {
    id: 3,
    name: "UX Designer",
    description:
      "Elaboração de fluxo de uso da aplicação sempre visando a melhor experiência do usuário, pois ninguém merece um site cheio de problemas de usabilidade.",
    icon: SlPeople,
  },
  {
    id: 4,
    name: "Responsividade",
    description:
      "Criação de aplicações que servem a qualquer tamanho de tela, do mobile ao desktop, pois não podemos ficar presos a um formato em um mundo tecnologicamente diversificado.",
    icon: SlFrame,
  },
  {
    id: 5,
    name: "Código Fonte Como Ativo",
    description:
      "O código do site ou aplicação é como um ativo para a empresa, portanto é importante ser dono de fato do seu site e não uma empresa de criação de sites online. Por isso te entrego código e não um site feito de arrasa e solta.",
    icon: SlWallet,
  },
];
export const benefits = [
  {
    id: 1,
    name: "Desenvolvimento customizado para atender seu negócio",
    description:
      "Sempre busco traduzir as necessidades e identidade da marca em um site único. Através da colaboração conjunta com o cliente, garanto que a aplicação reflita a personalidade, os valores e objetivos da marca. O resultado é uma plataforma customizada que se destaca entre os concorrentes",
  },
  {
    id: 2,
    name: "Programação criativa",
    description:
      "Com um olhar afiado para o estilo e muita criatividade, eu me especializo em programar sites visualmente incríveis e envolventes. Ao integrar estruturas de código elegantes, elementos interativos e princípios de design estratégicos, eu crio uma experiência de usuário imersiva e impactante. Seu site vai conquistar os visitantes, elevando a credibilidade e profissionalismo da sua marca.",
  },
  {
    id: 3,
    name: "Desenvolvimento centrado na experiência",
    description:
      "Dou prioridade ao desenvolvimento da experiência do usuário (UX), pensando nos seus visitantes durante todo o processo de codificação. Por meio de pesquisa extensiva e metodologias de teste com usuários, garanto que seu site seja intuitivo, fácil de navegar e guie os usuários de maneira eficaz. O resultado é uma jornada do usuário gratificante que impulsiona o envolvimento e as conversões.",
  },
  {
    id: 4,
    name: "Codigo otimizado para mobile",
    description:
      "No cenário atual impulsionado por dispositivos móveis, um site responsivo é essencial. Eu sou especializado em codificar designs compatíveis com dispositivos móveis que se adaptam perfeitamente a diferentes dispositivos e tamanhos de tela. Seu site manterá sua aparência e funcionalidade em computadores desktop, smartphones e tablets, permitindo que você alcance e envolva seu público de maneira eficaz.",
  },
  {
    id: 5,
    name: "Habilidade com tecnologias avançadas",
    description:
      "Com experiência em HTML, CSS, JavaScript e tecnologias front-end de ponta, possuo a habilidade técnica para concretizar seus conceitos de design. Desde animações fluidas até recursos interativos, eu aproveito as mais recentes tecnologias para elevar o envolvimento do usuário e proporcionar uma experiência dinâmica.",
  },
];
export const portfolios = [
  {
    id: 1,
    title: "Z - Aura Perfume Website",
    description:
      "Et nisi voluptate nulla ea mollit excepteur culpa. Labore non labore nostrud amet exercitation ad do enim laborum ea quis nulla. Mollit magna amet sunt tempor. Sunt tempor cupidatat mollit velit velit sint aliqua cillum id. Aliquip aliqua qui anim sunt.",
    link: "#",
    image: "/images/UI.png",
  },
  {
    id: 2,
    title: "Forhelp Charity Website",
    description:
      "Et nisi voluptate nulla ea mollit excepteur culpa. Labore non labore nostrud amet exercitation ad do enim laborum ea quis nulla. Mollit magna amet sunt tempor. Sunt tempor cupidatat mollit velit velit sint aliqua cillum id. Aliquip aliqua qui anim sunt.",
    link: "#",
    image: "/images/UI.png",
  },
  {
    id: 3,
    title: "Skill Bridge Website",
    description:
      "Et nisi voluptate nulla ea mollit excepteur culpa. Labore non labore nostrud amet exercitation ad do enim laborum ea quis nulla. Mollit magna amet sunt tempor. Sunt tempor cupidatat mollit velit velit sint aliqua cillum id. Aliquip aliqua qui anim sunt.",
    link: "#",
    image: "/images/UI.png",
  },
  {
    id: 4,
    title: "Current Vandi Website",
    description:
      "Et nisi voluptate nulla ea mollit excepteur culpa. Labore non labore nostrud amet exercitation ad do enim laborum ea quis nulla. Mollit magna amet sunt tempor. Sunt tempor cupidatat mollit velit velit sint aliqua cillum id. Aliquip aliqua qui anim sunt.",
    link: "#",
    image: "/images/UI.png",
  },
];

export const techs = [
  {
    id: 0,
    title: "Typescript",
    logo: "/images/typescript-logo.png",
  },
  {
    id: 1,
    title: "React",
    logo: "/images/react-logo.png",
  },
  {
    id: 2,
    title: "Node.js",
    logo: "/images/node-logo.png",
  },
  {
    id: 3,
    title: "Nextjs",
    logo: "/images/next-logo.svg",
  },
  {
    id: 4,
    title: "Tailwind",
    logo: "/images/tailwind-logo.png",
  },
  {
    id: 5,
    title: "PrismaORM",
    logo: "/images/prisma-logo.png",
  },
  {
    id: 6,
    title: "PostgreSQL",
    logo: "/images/posgres-logo.png",
  },
  {
    id: 7,
    title: "MongoDB",
    logo: "/images/mongodb-logo.svg",
  },
  {
    id: 8,
    title: "Framer Motion",
    logo: "/images/framer-motion.svg",
  },
  {
    id: 9,
    title: "Express",
    logo: "/images/express-logo.png",
  },
  {
    id: 10,
    title: "Git/Github",
    logo: "/images/git-logo.png",
  },
];

export const faqs = [
  {
    id: 1,
    question: "Você pode trabalhar remotamente com clientes?",
    answer:
      "Com certeza! Através de canais eficazes de comunicação, como e-mail, videochamadas e ferramentas de gerenciamento de projetos, garanto uma colaboração fluida, independentemente da localização geográfica.",
  },
  {
    id: 2,
    question: "Você oferece serviços de manutenção de sites?",
    answer:
      "Sim, ofereço serviços de manutenção de sites desde que façam parte das tecnologias que sou familiarizado.",
  },
  {
    id: 3,
    question: "Quais tipos de site você programa?",
    answer:
      "Ofereço a criação de qualquer tipo de aplicação, desde um simples site para portfólio até uma plataforma de e-commerce.",
  },
  {
    id: 4,
    question: "Quais formas de pagamento são aceitas?",
    answer:
      "PIX e dinheiro, com o pagamento sendo repartido em 50% antes do inicio do projeto e 50% depois.",
  },
  {
    id: 5,
    question: "Como funciona o processo de criação do site?",
    answer:
      "Conversamos sobre suas expectativas pessoalmente ou através de vídeo chamada. A partir dai, avalio nossa conversa separadamente e estabaleço um orçamento. Após isto, nos reunimos para firmar um contrato e receber o pagamento do sinal. Então elaboramos o aspecto visual da aplicação e após aprovação do mesmo, parto para o desenvolvimento em código, onde ao final entrego um site hospedado e com domínio por 1 ano.",
  },
  {
    id: 6,
    question:
      "E se eu quiser adicionar mais itens após o fechamento do desenvolvimento?",
    answer:
      "Se for o caso da adição de funcionalidades após a finalização da criação da aplicação, avalio a complexidade do peido e estabeleço um valor a parte.",
  },

  {
    id: 7,
    question: "Como funciona o suporte?",
    answer:
      "O suporte é gratuito apenas para problemas técnicos derivados do desenvolvimento e hospedagem.",
  },
];

export const socialLinks = [
  {
    id: 2,
    label: "Linkedin",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/lcpsd/",
  },
  {
    id: 3,
    label: "Whatsapp",
    icon: PhoneIcon,
    url: "https://api.whatsapp.com/send?phone=5517996484654",
  },
];

export const contactDetails = [
  {
    id: 1,
    icon: Phone,
    text: "+55(17)99648-4654",
  },
  {
    id: 2,
    icon: Mail,
    text: "lucascardosopsd@gmail.com",
  },
  {
    id: 3,
    icon: MapPin,
    text: "Jales-SP, Brasil",
  },
];

export const timeline = [
  {
    id: 1,
    title: "Desenvolvedor Web Pleno",
    duration: "2021 - Present",
    description:
      "Atuando como freelancer através de tecnologias como React, Next, Node, Postgres, Tailwind e muito mais.",
  },
];
