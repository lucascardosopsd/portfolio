"use client";

import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { TitlesData } from "@/types/titles";
import { motion } from "framer-motion";
import { SlArrowDown } from "react-icons/sl";

const CTA = ({ titlesData }: { titlesData: TitlesData }) => {
  return (
    <FadeDiv>
      <motion.div
        className="padding-section max-width border border-peach py-10"
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
            title={titlesData.ctaTitle}
            subtitle={titlesData.ctaSubTitle}
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
