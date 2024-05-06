"use client";
import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { Separator } from "@/components/ui/separator";
import { getLang } from "@/tools/getLang";
import { watchInView } from "@/tools/watchInView";
import { PortfolioDataProps } from "@/types/portfolio";
import { TitlesData } from "@/types/titles";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

interface PortfolioProps {
  titlesData: TitlesData[];
  portfolioData: PortfolioDataProps[];
}

const Portfolio = ({ titlesData, portfolioData }: PortfolioProps) => {
  const ref = useRef(null);
  const lang = getLang();
  const sectionId = "portfolio";

  const titles = titlesData.filter((title) => title.section == sectionId)[0];

  watchInView({ ref, id: sectionId });

  return (
    <FadeDiv>
      <section
        className="section-padding max-width border-t border-zinc-600 relative dark:bg-grid-white/[0.05] bg-grid-black/[0.05]"
        id={sectionId}
        ref={ref}
      >
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-zinc-950 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,#030712)]" />

        <SectionHeading
          title={titles.title[lang]}
          subtitle={titles.description[lang]}
        />

        <div className="flex flex-col items-center w-full">
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8">
            {portfolioData.map((project, index) => (
              <div
                className="relative border border-zinc-600 p-4 rounded bg-zinc-900"
                key={index}
              >
                <div className="flex flex-col mb-8">
                  <Link href={project.link} key={index}>
                    <Image
                      src={project.image.asset.url}
                      alt="Project"
                      height={0}
                      width={0}
                      sizes="4000px"
                      className="h-[300px] w-full tablet:w-auto object-cover object-top tablet:object-center rounded z-10 border border-transparent transition hover:border-white"
                    />
                  </Link>
                  <div className="flex flex-col gap-2 flex-1 justify-center">
                    <h2>{project.title[lang]}</h2>

                    <p className="text-lg text-zinc-400">
                      {project.subTitle[lang]}
                    </p>

                    <p>{project.description[lang]}</p>

                    <span className="px-2 py-1 text-zinc-400 flex items-center justify-center text-sm border border-zinc-400 rounded w-40">
                      {project.type}
                    </span>
                  </div>
                </div>
                <Separator />
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeDiv>
  );
};

export default Portfolio;
