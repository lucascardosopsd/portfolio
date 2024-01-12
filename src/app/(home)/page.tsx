import { getHero } from "../../services/getHero";
import { getTitles } from "../../services/getTitles";
import { getPortfolio } from "@/services/getPortfolio";
import { getTechs } from "@/services/getTechs";
import Portfolio from "@/sections/Portfolio";
import Techs from "@/sections/techs";
import Hero from "@/sections/Hero";

export default async function Home() {
  const heroData = await getHero();
  const titlesData = await getTitles();
  const portfolioData = (await getPortfolio()).sort(
    (a, b) => a.order - b.order
  );
  const techsData = await getTechs();

  return (
    <>
      <Hero data={heroData[0]} />
      <Portfolio portfolioData={portfolioData} titlesData={titlesData[0]} />
      <Techs techsData={techsData} titlesData={titlesData[0]} />
    </>
  );
}
