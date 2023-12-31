"use client";
import { watchInView } from "@/tools/watchInView";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import FadeDiv from "@/components/FadeDiv";
import { socialLinks } from "@/constants";
import { getLang } from "@/tools/getLang";

interface HeroDataProps {
  greeting: {
    pt: string;
    en: string;
  };
  title: {
    pt: string;
    en: string;
  };
  subtitle: {
    pt: string;
    en: string;
  };
  pic: {
    asset: {
      url: string;
    };
  };
}

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
            <p className="px-4 py-2 bg-peach-500 dark:bg-zinc-800  text-grey-600 dark:text-zinc-100 w-max rounded">
              {data.greeting[lang]}
            </p>
            <h1 className="text-grey dark:text-zinc-100">{data.title[lang]}</h1>
            <p className="text-grey-600 dark:text-zinc-300">
              {data.subtitle[lang]}
            </p>
          </div>

          <div className="flex flex-col space-y-4">
            <Link href="/#portfolio" className="btn btn-primary">
              Portfolio
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/contact"
              className="btn border hover:bg-zinc-100 hover:text-purple transition border-peach dark:border-zinc-600 dark:text-zinc-100"
            >
              <Phone />
              {lang == "en" ? "text to me" : "Fale Comigo!"}
            </Link>

            <div className="flex justify-center tablet:justify-start gap-3">
              {socialLinks.map((link, index) => (
                <div className="flex items-center space-x-2" key={index}>
                  <a
                    href={link.url}
                    className="w-10 h-10 bg-purple text-white flex items-center justify-center rounded"
                  >
                    <link.icon strokeWidth={0} fill="currentColor" />
                  </a>
                  <p className="text-zinc-800 dark:text-zinc-100">
                    {link.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-1 h-full w-full items-center justify-center py-4 tablet:py-0">
          <div className="relative h-[70vh] w-auto rounded-2xl border border-peach bg-zinc-50 dark dark:border-zinc-800 dark:bg-gradient-to-t dark:from-zinc-800 dark:to-zinc-900">
            <Image
              src={data.pic.asset.url}
              alt="Foto Desenvolvedor"
              height={1000}
              width={1000}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
      </section>
    </FadeDiv>
  );
};

export default Hero;
