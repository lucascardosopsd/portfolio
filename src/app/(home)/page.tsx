import { ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    // Hero Section
    <section className="flex items-center max-width flex-col-reverse tablet:flex-row mb-10">
      {/* Left */}
      <div className="tablet:w:2/3 mt-10 tablet:mt-0">
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

        <div className="flex flex-col gap-2 mt-4 tablet:justify-start">
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
    </section>
  );
}
