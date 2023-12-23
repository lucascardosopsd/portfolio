"use client";
import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/constants";
import { watchInView } from "@/tools/watchInView";
import { TitlesData } from "@/types/titles";
import { useRef } from "react";

const Skills = ({ titlesData }: { titlesData: TitlesData }) => {
  const ref = useRef(null);
  watchInView({ ref, id: "skills" });
  return (
    <FadeDiv>
      <section
        className="section-padding max-width border-t border-peach"
        id="skills"
        ref={ref}
      >
        <SectionHeading
          title={titlesData.skillsTitle}
          subtitle={titlesData.skillsSubTitle}
        />
        <div className="section-padding max-width grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="box flex flex-col items-center gap-5 border border-transparent hover:border-purple transition-colors"
            >
              <div className="w-16 h-16 rounded bg-purple flex items-center justify-center flex-shrink-0 mb-2">
                <skill.icon size={35} color="white" />
              </div>
              <div className="text-center">
                <h4 className="text-grey-700">{skill.name}</h4>
                <p className="text-grey-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeDiv>
  );
};

export default Skills;
