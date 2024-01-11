"use client";
import { watchInView } from "@/tools/watchInView";
import Image from "next/image";
import { useRef } from "react";
import FadeDiv from "@/components/FadeDiv";
import { socialLinks } from "@/constants";
import { getLang } from "@/tools/getLang";
import { HeroDataProps } from "@/types/hero";

interface HeroProps {
  data: HeroDataProps;
}

const Hero = ({ data }: HeroProps) => {
  const lang = getLang();

  const ref = useRef(null);
  watchInView({ ref, id: "hero" });

  return (
    <FadeDiv>
      <section
        className="flex items-center justify-center max-width flex-col-reverse tablet:flex-row space-x-4 py-4 tablet:py-0"
        id="hero"
        ref={ref}
      >
        {/* Left */}
        <div className="flex-1 tablet:w:2/3 mt-10 tablet:mt-0 space-y-4">
          <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
            <h1 className="text-zinc-100">{data.leftTitle[lang]}</h1>
            <p className="text-zinc-300">{data.leftDescription[lang]}</p>
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
        <div className="flex flex-1 h-full w-full items-center justify-center py-4 tablet:py-0">
          <div className="relative h-[70vh] w-auto">
            <Image
              src={data.pic.asset.url}
              alt="Foto Desenvolvedor"
              height={0}
              width={0}
              sizes="100vh"
              className="object-cover h-full w-full"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex-1 tablet:w:2/3 mt-10 tablet:mt-0 space-y-4">
          <div className="flex flex-col gap-3 items-center tablet:items-end max-w-2xl text-center tablet:text-left">
            <h1 className="text-zinc-100 text-center tablet:text-end">
              {data.rightTitle[lang]}
            </h1>
            <p className="text-zinc-300 text-center tablet:text-end">
              {data.rightDescription[lang]}
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
