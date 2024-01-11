"use client";
import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { getLang } from "@/tools/getLang";
import { watchInView } from "@/tools/watchInView";
import { TitlesData } from "@/types/titles";
import { useRef } from "react";

interface BenefitsDataProps {
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
}

interface BenefitsProps {
  benefitsData: BenefitsDataProps[];
  titlesData: TitlesData;
}

const Benefits = ({ titlesData, benefitsData }: BenefitsProps) => {
  const ref = useRef(null);
  watchInView({ ref, id: "benefits" });

  const lang = getLang();

  return (
    <FadeDiv>
      <section
        className="max-width section-padding border-t border-zinc-600 bg-purple"
        id="benefits"
        ref={ref}
      >
        <SectionHeading
          title={titlesData.benefitsTitle[lang]}
          subtitle={titlesData.benefitsSubTitle[lang]}
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 mb-6">
          {benefitsData.slice(0, 2).map((benefit, index) => (
            <div key={index} className="box">
              <h5 className="text-purple mb-2 text-center ">
                {benefit.title[lang]}
              </h5>
              <p className="text-center text-zinc-100">
                {benefit.description[lang]}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 tablet:gap-6">
          {benefitsData.slice(2).map((benefit, index) => (
            <div key={index} className="box">
              <h5 className="text-purple mb-2 text-center">
                {benefit.title[lang]}
              </h5>
              <p className="text-center text-zinc-100">
                {benefit.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>
    </FadeDiv>
  );
};

export default Benefits;
