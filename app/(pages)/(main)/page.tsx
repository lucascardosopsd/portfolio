import { getHero } from "../../services/getHero";
import { getTitles } from "../../services/getTitles";
import { getPortfolio } from "@/services/getPortfolio";
import { getTechs } from "@/services/getTechs";
import Portfolio from "@/components/sections/Portfolio";
import Techs from "@/components/sections/techs";
import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";
import { getPromises } from "@/services/gePromises";
import { getFaq } from "@/services/getFaq";
import Promises from "@/components/sections/Promises";
import Faq from "@/components/sections/Faq";

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
      <Portfolio portfolioData={portfolioData} titlesData={titlesData} />
      <Promises promisesData={promisesData} titlesData={titlesData} />
      <Techs techsData={techsData} titlesData={titlesData} />
      <Faq faqData={faqData} titlesData={titlesData} />
      <Contact titlesData={titlesData} />
    </div>
  );
}
