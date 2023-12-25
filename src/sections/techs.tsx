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
  titlesData: TitlesData;
  techsData: TechsDataProps[];
}

const Techs = ({ titlesData, techsData }: TechsProps) => {
  const ref = useRef(null);
  watchInView({ ref, id: "techs" });

  const lang = getLang();

  return (
    <FadeDiv>
      <section
        className="section-padding max-width border-t border-peach dark:border-zinc-600"
        id="techs"
        ref={ref}
      >
        <SectionHeading
          title={titlesData.techsTitle[lang]}
          subtitle={titlesData.techsSubTitle[lang]}
        />
        <div className="section-padding max-width grid grid-cols-2 tablet:grid-cols-4 gap-3 tablet:gap-6">
          {techsData
            .sort((a, b) => a.order - b.order)
            .map((tech, index) => (
              <div
                key={index}
                className="box transition flex flex-col items-center gap-5 hover:border-purple"
              >
                <div className="w-16 h-16flex items-center justify-center flex-shrink-0 mb-2">
                  <Image
                    src={tech.logo.asset.url}
                    alt={tech.title}
                    height={100}
                    width={100}
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-grey-700 dark:text-zinc-100">
                    {tech.title}
                  </h4>
                </div>
              </div>
            ))}
        </div>
      </section>
    </FadeDiv>
  );
};

export default Techs;
