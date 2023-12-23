import Skills from "@/sections/Skills";
import Hero from "../../sections/Hero";
import Benefits from "@/sections/Benefits";
import Portfolio from "@/sections/Portfolio";
import CTA from "@/sections/CTA";
import Techs from "@/sections/techs";
import { getHero } from "../../services/getHero";
import { getTitles } from "../../services/getTitles";
import { getSkills } from "@/services/getSkills";

export default async function Home() {
  const heroData = await getHero();
  const titlesData = await getTitles();
  const skillsData = await getSkills();

  return (
    <>
      <Hero data={heroData[0]} />
      <Skills skillsData={skillsData} titlesData={titlesData[0]} />
      <Benefits titlesData={titlesData[0]} />
      <Portfolio titlesData={titlesData[0]} />
      <Techs titlesData={titlesData[0]} />
      <CTA titlesData={titlesData[0]} />
    </>
  );
}
