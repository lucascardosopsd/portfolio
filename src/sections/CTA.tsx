"use client";
import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { getLang } from "@/tools/getLang";
import { motion } from "framer-motion";
import { SlArrowDown } from "react-icons/sl";

interface ctaDataprops {
  title: {
    pt: string;
    en: string;
  };
  subTitle: {
    pt: string;
    en: string;
  };
}
interface CtaProps {
  ctaData: ctaDataprops;
}

const CTA = ({ ctaData }: CtaProps) => {
  const lang = getLang();

  return (
    <FadeDiv>
      <motion.div
        className="padding-section max-width border border-zinc-600 py-10 bg-zinc-800"
        initial={{ height: "300px" }}
        whileInView={{
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="flex flex-col gap-4 justify-center items-center">
          <SectionHeading
            title={ctaData.title[lang]}
            subtitle={ctaData.subTitle[lang]}
          />
          <motion.div
            className="text-purple"
            initial={{ translateY: 0 }}
            animate={{ translateY: 10 }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
          >
            <SlArrowDown />
          </motion.div>
        </div>
      </motion.div>
    </FadeDiv>
  );
};

export default CTA;
