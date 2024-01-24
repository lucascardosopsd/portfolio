"use client";
import { Mail, MapPin, Phone } from "lucide-react";
import LinkedinIcon from "@/components/icons/Linkedin";
import WhatsappIcon from "@/components/icons/Whatsapp";
import GitHubIcon from "@/components/icons/Github";

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
      pt: "Escopo",
      en: "Scope",
    },
    url: "#promises",
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
      pt: "Faq",
      en: "Faq",
    },
    url: "#faq",
  },
  {
    label: {
      pt: "Contato",
      en: "Contact",
    },
    url: "#contact",
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: GitHubIcon,
    url: "https://github.com/lucascardosopsd",
  },
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
