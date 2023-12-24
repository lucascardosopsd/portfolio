"use client";
import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { SlArrowDown } from "react-icons/sl";

interface CtaDataprops {
  title: string;
  subTitle: string;
}
interface CtaProps {
  CtaData: CtaDataprops;
}

const CTA = ({ CtaData }: CtaProps) => {
  return (
    <FadeDiv>
      <motion.div
        className="padding-section max-width border border-peach dark:border-zinc-600 py-10 dark:bg-zinc-800"
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
          <SectionHeading title={CtaData.title} subtitle={CtaData.subTitle} />
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
