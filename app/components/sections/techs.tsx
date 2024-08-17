"use client";
import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { getLang } from "@/tools/getLang";
import { watchInView } from "@/tools/watchInView";
import { TitlesData } from "@/types/titles";
import Image from "next/image";
import { useRef } from "react";

interface TechsDataProps {
  order: number;
  title: string;
  logo: {
    asset: {
      url: string;
    };
  };
}

interface TechsProps {
  titlesData: TitlesData[];
  techsData: TechsDataProps[];
}

const Techs = ({ titlesData, techsData }: TechsProps) => {
  const ref = useRef(null);
  const lang = getLang();
  const sectionId = "techs";
  const titles = titlesData.filter((title) => title.section == sectionId)[0];

  watchInView({ ref, id: sectionId });

  return (
    <FadeDiv>
      <section
        className="section-padding max-width border-t border-zinc-600 relative"
        id={sectionId}
        ref={ref}
      >
        <SectionHeading
          title={titles.title[lang]}
          subtitle={titles.description[lang]}
        />

        <Image
          src="/images/illustration-8.svg"
          alt="Illustration"
          height={0}
          width={0}
          sizes="100vh"
          className="h-[200px] w-auto absolute left-10 top-10 hidden tablet:block -z-10"
        />

        <Image
          src="/images/illustration-10.svg"
          alt="Illustration"
          height={0}
          width={0}
          sizes="100vh"
          className="h-[200px] w-auto absolute right-10 bottom-10 hidden tablet:block -z-10"
        />

        <div className="section-padding max-width grid grid-cols-2 tablet:grid-cols-4 gap-3 tablet:gap-6">
          {techsData
            .sort((a, b) => a.order - b.order)
            .map((tech, index) => (
              <div
                key={index}
                className="box transition flex flex-col items-center gap-5 hover:border-zinc-800"
              >
                <div className="w-20 h-20 flex items-center justify-center flex-shrink-0 mb-2 relative">
                  <Image
                    src={tech.logo.asset.url}
                    alt={tech.title}
                    height={0}
                    width={0}
                    sizes="100vh"
                    className="h-full w-full object-fill"
                  />
                </div>
                <div className="flex items-center justify-center h-10">
                  <p className="text-zinc-100 text-lg font-light">
                    {tech.title}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </FadeDiv>
  );
};

export default Techs;
