"use client";
import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { techs } from "@/constants";
import { watchInView } from "@/tools/watchInView";
import Image from "next/image";
import { useRef } from "react";

const Techs = () => {
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
          title={<span className="text-white">Tecnologias</span>}
          subtitle={
            <span className="text-white">
              Essas são as tecnologias que mais domino, com elas cosigo entregar
              uma aplicação consistente e robusta, sem sacrificar a velocidade
              de desenvolvimento.
            </span>
          }
        />
        <div className="section-padding max-width grid grid-cols-2 tablet:grid-cols-4 gap-3 tablet:gap-6">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="box hover:scale-110 transition flex flex-col items-center gap-5 border border-transparent hover:border-purple"
            >
              <div className="w-16 h-16flex items-center justify-center flex-shrink-0 mb-2">
                <Image
                  src={tech.logo}
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
