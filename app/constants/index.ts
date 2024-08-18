"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import LinkedinIcon from "@/components/icons/Linkedin";
import WhatsappIcon from "@/components/icons/Whatsapp";
import GitHubIcon from "@/components/icons/Github";
import { SocialLinksProps } from "@/types/socialLinks";
import { IconType } from "react-icons";

export const navLinks = [
  {
    label: {
      pt: "Inicio",
      en: "Home",
    },
    url: "#hero",
  },
  // {
  //   label: {
  //     pt: "Escopo",
  //     en: "Scope",
  //   },
  //   url: "#promises",
  // },
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
      en: "Stack",
    },
    url: "#techs",
  },
  // {
  //   label: {
  //     pt: "Faq",
  //     en: "Faq",
  //   },
  //   url: "#faq",
  // },
  {
    label: {
      pt: "Contato",
      en: "Contact",
    },
    url: "#contact",
  },
];

export const socialLinks: SocialLinksProps = {
  github: {
    icon: GitHubIcon as IconType,
    url: "https://github.com/lucascardosopsd",
  },
  linkedin: {
    icon: LinkedinIcon as IconType,
    url: "https://www.linkedin.com/in/lcpsd/",
  },
  whatsapp: {
    icon: WhatsappIcon as IconType,
    url: "https://api.whatsapp.com/send?phone=5517996484654",
  },
};

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
