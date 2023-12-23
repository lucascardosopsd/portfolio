"use client";
import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { benefits } from "@/constants";
import { watchInView } from "@/tools/watchInView";
import { TitlesData } from "@/types/titles";
import { useRef } from "react";

const Benefits = ({ titlesData }: { titlesData: TitlesData }) => {
  const ref = useRef(null);
  watchInView({ ref, id: "benefits" });

  return (
    <FadeDiv>
      <section
        className="max-width section-padding border-t border-peach bg-purple"
        id="benefits"
        ref={ref}
      >
        <SectionHeading
          title={<span className="text-white">{titlesData.benefitsTitle}</span>}
          subtitle={
            <span className="text-white">{titlesData.benefitsSubTitle}</span>
          }
          classname="text-white"
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 mb-6">
          {benefits.slice(0, 2).map((benefit, index) => (
            <div key={index} className="box">
              <h5 className="text-purple mb-2 text-center">{benefit.name}</h5>
              <p className="text-grey-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 tablet:gap-6">
          {benefits.slice(2).map((benefit, index) => (
            <div key={index} className="box">
              <h5 className="text-purple mb-2 text-center">{benefit.name}</h5>
              <p className="text-grey-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>
    </FadeDiv>
  );
};

export default Benefits;
