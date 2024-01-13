import { ContactFormSchemaProps } from "@/validators/contact";
import { FC } from "react";

export const ContactEmailTemplate: FC<Readonly<ContactFormSchemaProps>> = ({
  name,
  phone,
  email,
  message,
}) => (
  <div className="w-full h-full flex flex-col justify-center bg-zinc-900 text-zinc-200">
    <h2>Novo Cliente!</h2>

    <div className="flex flex-col items-center justify-center p-4 border border-zinc-800 rounded mx-auto">
      <h4>Nome</h4>
      <p>{name}</p>

      {email ? (
        <>
          <h4>E-mail</h4>
          <p>{email}</p>
        </>
      ) : (
        <>
          <h4>Telefone</h4>
          <p>{phone}</p>
        </>
      )}

      {email && phone && (
        <>
          <h4>E-mail</h4>
          <p>{email}</p>

          <h4>Telefone</h4>
          <p>{phone}</p>
        </>
      )}

      <h4>Mensagem</h4>
      <p>{message}</p>
    </div>
  </div>
);
