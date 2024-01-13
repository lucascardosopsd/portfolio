"use client";
import { watchInView } from "@/tools/watchInView";
import Image from "next/image";
import { useRef } from "react";
import FadeDiv from "@/components/FadeDiv";
import { socialLinks } from "@/constants";
import { getLang } from "@/tools/getLang";
import { HeroDataProps } from "@/types/hero";
import { TitlesData } from "@/types/titles";

interface HeroProps {
  data: HeroDataProps;
  titlesData: TitlesData[];
}

const Hero = ({ data, titlesData }: HeroProps) => {
  const lang = getLang();
  const sectionId = "hero";
  const ref = useRef(null);

  const titleLeft = titlesData.filter(
    (title) => title.section == "headerLeft"
  )[0];
  const titleRight = titlesData.filter(
    (title) => title.section == "headerRight"
  )[0];

  watchInView({ ref, id: sectionId });

  return (
    <FadeDiv>
      <section
        className="flex items-center justify-center max-width flex-col-reverse tablet:flex-row space-x-4 py-20 tablet:py-4 tablet:!min-h-[calc(100svh-5rem)] relative mb-[6rem]"
        id={sectionId}
        ref={ref}
      >
        {/* Absolute */}
        <Image
          src="/images/dashed-line.svg"
          alt="Linha tracejada"
          height={0}
          width={0}
          sizes="100vh"
          className="h-full w-[40vw] max-w-[700px] absolute -z-20 hidden tablet:block top-0"
        />

        <span className="font-black text-8xl text-zinc-600 hidden tablet:block">
          <p className="absolute -left-72 top-0">DESENVOLVEDOR</p>

          <p className="absolute -right-40 bottom-0">FULLSTACK</p>
        </span>

        {/* Left */}
        <div className="flex-1 tablet:w:2/3 translate-y-10 tablet:mt-0 space-y-4">
          <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
            <h1 className="text-zinc-100">{titleLeft.title[lang]}</h1>
            <p className="text-zinc-300">{titleLeft.description[lang]}</p>
          </div>

          <div className="flex flex-col space-y-4">
            <div className="flex justify-center tablet:justify-start gap-4">
              {socialLinks.map((link, index) => (
                <a
                  href={link.url}
                  className="w-10 h-10 bg-purple text-white flex items-center justify-center rounded"
                  key={index}
                >
                  <link.icon size={36} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Center */}
        <div className="flex flex-1 h-full w-full items-center justify-center py-4 tablet:py-0 relative">
          <div className="relative h-[70vh] w-auto">
            <Image
              src={data.pic.asset.url}
              alt="Foto Desenvolvedor"
              height={0}
              width={0}
              sizes="100vh"
              className="object-cover h-full w-full max-h-[700px]"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 tablet:w:2/3 tablet:mt-0 space-y-4 -translate-y-5">
          <div className="flex flex-col gap-3 items-center tablet:items-end max-w-2xl text-center tablet:text-left">
            <h1 className="text-zinc-100 text-center tablet:text-end  text-4xl">
              {titleRight.title[lang]}
            </h1>
            <p className="text-zinc-300 text-center tablet:text-end">
              {titleRight.description[lang]}
            </p>
          </div>

          <div className="flex flex-col tablet:flex-row gap-2">
            {data.highlights.map((highlight, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <p className="p-2 rounded border border-zinc-600 text-center tablet:text-end">
                  {highlight.title}
                </p>
                <p className="text-center tablet:text-end">
                  {highlight.subTitle[lang]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeDiv>
  );
};

export default Hero;
