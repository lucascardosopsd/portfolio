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
        className="section-padding max-width border-t border-zinc-600 relative "
        id={sectionId}
        ref={ref}
      >
        <Image
          src="/images/illustration-1.svg"
          alt="Illustration"
          height={0}
          width={0}
          sizes="100vh"
          className="h-[300px] w-auto absolute left-20 top-40 hidden tablet:block"
        />

        <Image
          src="/images/illustration-2.svg"
          alt="Illustration"
          height={0}
          width={0}
          sizes="100vh"
          className="h-[300px] w-auto absolute right-20 bottom-40 hidden tablet:block"
        />
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
                <Image
                  src="/images/illustration-3.svg"
                  alt="Project"
                  height={0}
                  width={0}
                  sizes="100vh"
                  className="h-[300px] w-auto absolute -left-16  bottom-0 top-0 my-auto hidden tablet:block -z-10"
                />
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
