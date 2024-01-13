"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { getLang } from "@/tools/getLang";
import { watchInView } from "@/tools/watchInView";
import { FaqDataProps } from "@/types/faq";
import { TitlesData } from "@/types/titles";
import { useRef } from "react";

interface FaqProps {
  titlesData: TitlesData[];
  faqData: FaqDataProps[];
}

const Faq = ({ titlesData, faqData }: FaqProps) => {
  const sectionId = "faq";
  const titles = titlesData.filter((title) => title.section == sectionId)[0];

  const ref = useRef(null);
  watchInView({ ref, id: sectionId });

  const lang = getLang();

  return (
    <FadeDiv>
      <section
        className="section-padding max-width border-t border-zinc-600"
        id={sectionId}
        ref={ref}
      >
        <SectionHeading
          title={titles.title[lang]}
          subtitle={titles.description[lang]}
        />

        <div className="grid grid-col-1 gap-2 max-w-[600px] mx-auto">
          {faqData.map((faq, index) => (
            <Accordion type="single" collapsible key={index}>
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm border border-zinc-600 rounded px-4">
                  {faq.title[lang]}
                </AccordionTrigger>
                <AccordionContent className="p-4">
                  {faq.description[lang]}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </section>
    </FadeDiv>
  );
};

export default Faq;
