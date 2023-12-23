"use client";
import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { watchInView } from "@/tools/watchInView";
import { TitlesData } from "@/types/titles";
import Image from "next/image";
import { useRef } from "react";

interface TechsDataProps {
  order: string;
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
  return (
    <FadeDiv>
      <section
        className="section-padding max-width border-t border-peach bg-purple"
        id="techs"
        ref={ref}
      >
        <SectionHeading
          title={<span className="text-white">{titlesData.techsTitle}</span>}
          subtitle={<span className="text-white">{titlesData.techsTitle}</span>}
        />
        <div className="section-padding max-width grid grid-cols-2 tablet:grid-cols-4 gap-3 tablet:gap-6">
          {techsData.map((tech, index) => (
            <div
              key={index}
              className="box hover:scale-110 transition flex flex-col items-center gap-5 border border-transparent hover:border-purple"
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
                <h4 className="text-grey-700">{tech.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeDiv>
  );
};

export default Techs;
