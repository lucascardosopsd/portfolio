"use client";

import SectionHeading from "@/components/SectionHeading";
import { benefits } from "@/constants";
import { watchInView } from "@/tools/watchInView";
import { useRef } from "react";

const Benefits = () => {
  const ref = useRef(null);
  watchInView({ ref, id: "benefits" });

  return (
    <section
      className="max-width section-padding border-t border-peach bg-purple"
      id="benefits"
      ref={ref}
    >
      <SectionHeading
        title={<span className="text-white">Vantagens</span>}
        subtitle={
          <span className="text-white">
            A seguir te mostro as vanagens de desenvolversua solução comigo.
          </span>
        }
        classname="text-white"
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6 mb-6">
        {benefits.slice(0, 2).map((benefit, index) => (
          <div key={index} className="box">
            <h5 className="text-purple mb-2 text-center">{benefit.name}</h5>
            <p className="text-grey-600">{benefit.description}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-3 tablet:gap-6">
        {benefits.slice(2).map((benefit, index) => (
          <div key={index} className="box">
            <h5 className="text-purple mb-2 text-center">{benefit.name}</h5>
            <p className="text-grey-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
