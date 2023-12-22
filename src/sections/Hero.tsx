import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="flex items-center justify-center max-width flex-col-reverse tablet:flex-row space-x-4 my-4"
      id="home"
    >
      {/* Left */}
      <div className="flex-1 tablet:w:2/3 mt-10 tablet:mt-0 space-y-4">
        <div className="flex flex-col gap-3 items-center tablet:items-start max-w-2xl text-center tablet:text-left">
          <p className="px-4 py-2 bg-peach-500 text-grey-600 w-max rounded">
            Olá 👋
          </p>
          <h1 className="text-grey">Seja Muito bem vindo!</h1>
          <p className="text-grey-600">
            Meu nome é Lucas Cardoso, sou desenvolvedor Javascript/Typescript a
            mais de 3 anos e utilizo tecnologias de ponta para te entregar o
            melhor resultado. Neste site vou te apresentar um pouco sobre mim.
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="/portfolio" className="btn btn-primary">
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
          <div className="absolute bottom-0 w-full h-1/4 z-10 bg-gradient-to-t from-peach-600 to-transparent" />
          <Image
            src="/images/me.png"
            alt="Foto Desenvolvedor"
            height={400}
            width={400}
            className="h-[400px] tablet:h-[600px] w-auto mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
