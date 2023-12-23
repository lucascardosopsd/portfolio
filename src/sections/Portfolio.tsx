"use client";

import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { portfolios } from "@/constants";
import { watchInView } from "@/tools/watchInView";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const Portfolio = () => {
  const ref = useRef(null);
  watchInView({ ref, id: "portfolio" });
  return (
    <FadeDiv>
      <section className="section-padding max-width" id="portfolio" ref={ref}>
        <SectionHeading
          title="Portfólio"
          subtitle="Aqui está uma seleção dos meus melhores projetos. Clique em um e veja em produção."
        />
        <div className="section-padding max-width grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] tablet:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-3 tablet:gap-6">
          {portfolios.map((project, index) => (
            <Link
              key={index}
              href={project.link}
              className="box flex flex-col items-center gap-5 border border-transparent hover:border-purple transition group cursor-pointer "
            >
              <div className="relative w-full h-80 overflow-hidden rounded bg-purple flex items-center justify-center flex-shrink-0 mb-2 group-hover:scale-110 transition">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center group-hover:scale-110 transition">
                <h4 className="text-purple">{project.title}</h4>
                <p className="text-grey-600">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </FadeDiv>
  );
};

export default Portfolio;
