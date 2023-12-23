import Skills from "@/sections/Skills";
import Hero from "../../sections/Hero";
import Benefits from "@/sections/Benefits";
import Portfolio from "@/sections/Portfolio";
import CTA from "@/sections/CTA";
import Techs from "@/sections/techs";
import { getHero } from "../services/getHero";

export default async function Home() {
  const heroData = await getHero();
  return (
    <>
      <Hero data={heroData[0]} />
      <Skills />
      <Benefits />
      <Portfolio />
      <Techs />
      <CTA />
    </>
  );
}
