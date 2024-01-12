"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import LinkedinIcon from "@/components/icons/Linkedin";
import WhatsappIcon from "@/components/icons/Whatsapp";

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
      pt: "Portfolio",
      en: "Portfolio",
    },
    url: "#portfolio",
  },
  {
    label: {
      pt: "Techs",
      en: "Techs",
    },
    url: "#techs",
  },
  {
    label: {
      pt: "Contato",
      en: "Contact",
    },
    url: "#contact",
  },
  {
    label: {
      pt: "Faq",
      en: "Faq",
    },
    url: "#faq",
  },
];

export const faqs = [
  {
    id: 1,
    question_pt: "Você pode trabalhar remotamente com clientes?",
    question_en: "Can you work remotely with clients?",
    answer_pt:
      "Com certeza! Através de canais eficazes de comunicação, como e-mail, videochamadas e ferramentas de gerenciamento de projetos, garanto uma colaboração fluida, independentemente da localização geográfica.",
    answer_en:
      "Certainly! Through effective communication channels such as email, video calls, and project management tools, I ensure smooth collaboration regardless of geographical location.",
  },
  {
    id: 2,
    question_pt: "Você oferece serviços de manutenção de sites?",
    question_en: "Do you offer website maintenance services?",
    answer_pt:
      "Sim, ofereço serviços de manutenção de sites, desde que façam parte das tecnologias com as quais estou familiarizado.",
    answer_en:
      "Yes, I offer website maintenance services, provided they are within the technologies I am familiar with.",
  },
  {
    id: 3,
    question_pt: "Quais tipos de site você programa?",
    question_en: "What types of websites do you program?",
    answer_pt:
      "Ofereço a criação de qualquer tipo de aplicação, desde um simples site para portfólio até uma plataforma de e-commerce.",
    answer_en:
      "I offer the creation of any type of application, from a simple portfolio website to an e-commerce platform.",
  },
  {
    id: 4,
    question_pt: "Quais formas de pagamento são aceitas?",
    question_en: "What forms of payment are accepted?",
    answer_pt:
      "PIX e dinheiro, com o pagamento sendo dividido em 50% antes do início do projeto e 50% depois.",
    answer_en:
      "PIX and cash, with payment divided into 50% before the start of the project and 50% afterward.",
  },
  {
    id: 5,
    question_pt: "Como funciona o processo de criação do site?",
    question_en: "How does the website creation process work?",
    answer_pt:
      "Conversamos sobre suas expectativas pessoalmente ou através de vídeo chamada. A partir daí, avalio nossa conversa separadamente e estabeleço um orçamento. Após isso, nos reunimos para firmar um contrato e receber o pagamento do sinal. Em seguida, elaboramos o aspecto visual da aplicação e, após aprovação do mesmo, parto para o desenvolvimento em código, onde, ao final, entrego um site hospedado e com domínio por 1 ano.",
    answer_en:
      "We discuss your expectations in person or via video call. From there, I assess our conversation separately and establish a budget. After that, we meet to finalize a contract and receive the down payment. Then, we develop the visual aspect of the application, and upon its approval, I proceed to code development. Finally, I deliver a hosted website with a domain for 1 year.",
  },
  {
    id: 6,
    question_pt:
      "E se eu quiser adicionar mais itens após o fechamento do desenvolvimento?",
    question_en:
      "What if I want to add more items after the development is closed?",
    answer_pt:
      "Se for o caso da adição de funcionalidades após a finalização da criação da aplicação, avalio a complexidade do pedido e estabeleço um valor à parte.",
    answer_en:
      "If there's a need to add functionalities after the completion of the application, I assess the complexity of the request and establish a separate fee.",
  },
  {
    id: 7,
    question_pt: "Como funciona o suporte?",
    question_en: "How does support work?",
    answer_pt:
      "O suporte é gratuito apenas para problemas técnicos derivados do desenvolvimento e hospedagem.",
    answer_en:
      "Support is free only for technical issues derived from development and hosting.",
  },
];

export const socialLinks = [
  {
    id: 2,
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/lcpsd/",
  },
  {
    id: 3,
    icon: WhatsappIcon,
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
