"use client";

import SectionHeading from "@/components/SectionHeading";
import { motion } from "framer-motion";
import { SlArrowDown } from "react-icons/sl";

const CTA = () => {
  return (
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
          title="Vamos fechar negócio?"
          subtitle="Você pode ter um site como este ou até mesmo uma aplicação mais robusta, basta clicar no botão azul ou enviar um e-mail para o endereço abaixo."
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
  );
};

export default CTA;
