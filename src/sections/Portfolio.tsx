"use client";
import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { getLang } from "@/tools/getLang";
import { watchInView } from "@/tools/watchInView";
import { PortfolioDataProps } from "@/types/portfolio";
import { TitlesData } from "@/types/titles";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface PortfolioProps {
  titlesData: TitlesData;
  portfolioData: PortfolioDataProps[];
}

const Portfolio = ({ titlesData, portfolioData }: PortfolioProps) => {
  const ref = useRef(null);
  watchInView({ ref, id: "portfolio" });

  const lang = getLang();

  return (
    <FadeDiv>
      <section
        className="section-padding max-width border-t border-zinc-600"
        id="portfolio"
        ref={ref}
      >
        <SectionHeading
          title={titlesData.portfolioTitle[lang]}
          subtitle={titlesData.portfolioSubTitle[lang]}
        />
        <div className="section-padding max-width grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {portfolioData.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="box flex flex-col items-center gap-5 border border-transparent hover:border-purple transition group cursor-pointer "
            >
              <div className="relative w-full h-80 overflow-hidden rounded flex items-center justify-center flex-shrink-0 mb-2 group-hover:scale-110 transition">
                <div className="w-full h-8 absolute bottom-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                <Image
                  src={project.image.asset.url}
                  alt={project.title[lang]}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col items-center text-center group-hover:scale-110 transition">
                <div className="flex relative">
                  <h4 className="text-purple">{project.title[lang]}</h4>
                  <h4 className="bg-purple text-white rounded text-xs flex items-center justify-center p-2 absolute -right-12 top-0">
                    {project.type}
                  </h4>
                </div>
                <p className="text-zinc-100">{project.description[lang]}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </FadeDiv>
  );
};

export default Portfolio;
