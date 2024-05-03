import { getHero } from "../../services/getHero";
import { getTitles } from "../../services/getTitles";
import { getPortfolio } from "@/services/getPortfolio";
import { getTechs } from "@/services/getTechs";
import Portfolio from "@/sections/Portfolio";
import Techs from "@/sections/techs";
import Hero from "@/sections/Hero";
import { getFaq } from "@/services/getFaq";
import Faq from "@/sections/Faq";
import Contact from "@/sections/Contact";
import Promises from "@/sections/Promises";
import { getPromises } from "@/services/gePromises";

export default async function Home() {
  const heroData = await getHero();
  const titlesData = await getTitles();
  const portfolioData = (await getPortfolio()).sort(
    (a, b) => a.order - b.order
  );
  const promisesData = (await getPromises()).sort((a, b) => a.order - b.order);
  const faqData = (await getFaq()).sort((a, b) => a.order - b.order);

  const techsData = await getTechs();

  return (
    <div>
      <Hero data={heroData[0]} titlesData={titlesData} />
      <Promises promisesData={promisesData} titlesData={titlesData} />
      <Portfolio portfolioData={portfolioData} titlesData={titlesData} />
      <Techs techsData={techsData} titlesData={titlesData} />
      <Faq faqData={faqData} titlesData={titlesData} />
      <Contact titlesData={titlesData} />
    </div>
  );
}
