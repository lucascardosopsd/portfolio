"use client";
import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/constants";
import { getLang } from "@/tools/getLang";
import { watchInView } from "@/tools/watchInView";
import { PromisesDataProps } from "@/types/promises";
import { TitlesData } from "@/types/titles";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { IoMdCheckmark } from "react-icons/io";

interface TechsDataProps {
  order: number;
  title: string;
  logo: {
    asset: {
      url: string;
    };
  };
}

interface PromissesProps {
  titlesData: TitlesData[];
  promisesData: PromisesDataProps[];
}

const Promises = ({ titlesData, promisesData }: PromissesProps) => {
  const ref = useRef(null);
  const lang = getLang();
  const sectionId = "promises";
  const titles = titlesData.filter((title) => title.section == sectionId)[0];

  watchInView({ ref, id: sectionId });

  return (
    <FadeDiv>
      <section
        className="section-padding max-width border-t border-zinc-600 flex flex-col justify-center items-center relative"
        id={sectionId}
        ref={ref}
      >
        <Image
          src="/images/illustration-9.svg"
          alt="Illustration"
          height={0}
          width={0}
          sizes="100vh"
          className="h-[200px] w-auto absolute left-10 top-10 hidden tablet:block -z-10"
        />

        <Image
          src="/images/illustration-9.svg"
          alt="Illustration"
          height={0}
          width={0}
          sizes="100vh"
          className="h-[200px] w-auto absolute right-10 bottom-10 hidden tablet:block -z-10"
        />

        <SectionHeading
          title={titles.title[lang]}
          subtitle={titles.description[lang]}
        />
        <div className="flex flex-col items-center tablet:flex-row border border-zinc-200 rounded w-full max-w-[800px] p-10 gap-4 tablet:gap-2 bg-zinc-900">
          <div className="grid grid-cols-1 mobile:grid-cols-2 flex-[2]">
            {promisesData.map((promise, index) => (
              <div key={index} className="flex items-center gap-2">
                <IoMdCheckmark />
                <p>{promise.title[lang]}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center flex-1">
            <Link href={socialLinks[1].url}>
              <Button variant="outline" className="rounded w-full">
                Orçamento
              </Button>
            </Link>
          </div>
        </div>
        <p className="max-w-[800px] text-center text-sm text-zinc-500 mt-4">
          {lang == "pt"
            ? "A autenticação depende da necessidade da aplicação | O suporte é para problemas relacionados ao desenvolvimento e hospedagem | O CMS será necessário dependendo do tipo de aplicação."
            : "Authentication depends on the application's needs. Support is for issues related to development and hosting. The CMS will be necessary depending on the type of application."}
        </p>
      </section>
    </FadeDiv>
  );
};

export default Promises;
