import SectionHeading from "@/components/SectionHeading";

const CTA = () => {
  return (
    <section className="padding-section max-width border border-peach py-10">
      <div className="flex flex-col tablet:flex-row gap-4 justify-center">
        <SectionHeading
          title="Vamos fechar negócio?"
          subtitle="Você pode ter um site como este ou até mesmo uma aplicação mais robusta, basta clicar no botão azul ou enviar um e-mail para o endereço abaixo."
        />
      </div>
    </section>
  );
};

export default CTA;
