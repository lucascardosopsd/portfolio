"use client";
import { watchInView } from "@/tools/watchInView";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import FadeDiv from "@/components/FadeDiv";

interface HeroDataProps {
  greeting: string;
  title: string;
  subtitle: string;
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
  const ref = useRef(null);
  watchInView({ ref, id: "hero" });

  return (
    <FadeDiv>
      <section
        className="flex items-center justify-center max-width flex-col-reverse tablet:flex-row space-x-4"
        id="hero"
        ref={ref}
      >
        {/* Left */}
        <div className="flex-1 tablet:w:2/3 mt-10 tablet:mt-0 space-y-4">
          <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
            <p className="px-4 py-2 bg-peach-500 text-grey-600 w-max rounded">
              {data.greeting}
            </p>
            <h1 className="text-grey">{data.title}</h1>
            <p className="text-grey-600">{data.subtitle}</p>
          </div>

          <div className="flex flex-col space-y-4">
            <Link href="/#portfolio" className="btn btn-primary">
              Portfolio
              <ArrowRight size={16} />
            </Link>

            <Link href="/contact" className="btn border border-peach">
              <Phone />
              Fale Comigo!
            </Link>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-1">
          <div className="relative w-full h-full my-auto">
            <Image
              src={data.pic.asset.url}
              alt="Foto Desenvolvedor"
              height={400}
              width={400}
              className="h-[400px] tablet:h-[600px] w-auto mx-auto"
            />
          </div>
        </div>
      </section>
    </FadeDiv>
  );
};

export default Hero;
