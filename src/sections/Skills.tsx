"use client";
import DynamicSlIcon from "@/components/DynamicSlIcon";
import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { getLang } from "@/tools/getLang";
import { watchInView } from "@/tools/watchInView";
import { TitlesData } from "@/types/titles";
import { useRef } from "react";

interface SkillsDataProps {
  title: {
    pt: string;
    en: string;
  };
  description: {
    pt: string;
    en: string;
  };
  slIconName: string;
}

interface SKillsProps {
  titlesData: TitlesData;
  skillsData: SkillsDataProps[];
}

const Skills = ({ titlesData, skillsData }: SKillsProps) => {
  const lang = getLang();

  const ref = useRef(null);
  watchInView({ ref, id: "skills" });

  return (
    <FadeDiv>
      <section
        className="section-padding max-width border-t border-zinc-600"
        id="skills"
        ref={ref}
      >
        <SectionHeading
          title={titlesData.skillsTitle[lang]}
          subtitle={titlesData.skillsSubTitle[lang]}
        />
        <div className="section-padding max-width grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {skillsData.map((skill, index) => {
            return (
              <div
                key={index}
                className="box flex flex-col items-center gap-5 border border-transparent hover:border-purple transition-colors"
              >
                <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-2">
                  <DynamicSlIcon
                    name={skill.slIconName}
                    size={35}
                    color="white"
                  />
                </div>
                <div className="text-center">
                  <h4 className="text-zinc-100">{skill.title[lang]}</h4>
                  <p className="text-zinc-100">{skill.description[lang]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </FadeDiv>
  );
};

export default Skills;
