import Skills from "@/sections/Skills";
import Hero from "../../sections/Hero";
import Benefits from "@/sections/Benefits";
import Portfolio from "@/sections/Portfolio";
import CTA from "@/sections/CTA";
import Techs from "@/sections/techs";
import { getHero } from "../../services/getHero";
import { getTitles } from "../../services/getTitles";
import { getSkills } from "@/services/getSkills";
import { getBenefits } from "@/services/getBenefits";
import { getProjects } from "@/services/getProjects";

export default async function Home() {
  const heroData = await getHero();
  const titlesData = await getTitles();
  const skillsData = await getSkills();
  const benefitsData = await getBenefits();
  const projectsData = await getProjects();

  return (
    <>
      <Hero data={heroData[0]} />
      <Skills skillsData={skillsData} titlesData={titlesData[0]} />
      <Benefits benefitsData={benefitsData} titlesData={titlesData[0]} />
      <Portfolio projectsData={projectsData} titlesData={titlesData[0]} />
      <Techs titlesData={titlesData[0]} />
      <CTA titlesData={titlesData[0]} />
    </>
  );
}
