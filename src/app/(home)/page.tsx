import Skills from "@/sections/Skills";
import { getHero } from "../../services/getHero";
import { getTitles } from "../../services/getTitles";
import { getSkills } from "@/services/getSkills";
import { getBenefits } from "@/services/getBenefits";
import { getPortfolio } from "@/services/getPortfolio";
import { getTechs } from "@/services/getTechs";
import { getCta } from "@/services/getCta";
import Benefits from "@/sections/Benefits";
import Portfolio from "@/sections/Portfolio";
import Techs from "@/sections/techs";
import CTA from "@/sections/CTA";
import Hero from "@/sections/Hero";

export default async function Home() {
  const heroData = await getHero();
  const titlesData = await getTitles();
  const skillsData = await getSkills();
  const benefitsData = await getBenefits();
  const portfolioData = (await getPortfolio()).sort(
    (a, b) => a.order - b.order
  );
  const techsData = await getTechs();
  const ctaData = await getCta();

  return (
    <>
      <Hero data={heroData[0]} />
      <Skills skillsData={skillsData} titlesData={titlesData[0]} />
      <Benefits benefitsData={benefitsData} titlesData={titlesData[0]} />
      <Portfolio portfolioData={portfolioData} titlesData={titlesData[0]} />
      <Techs techsData={techsData} titlesData={titlesData[0]} />
      <CTA ctaData={ctaData[0]} />
    </>
  );
}
