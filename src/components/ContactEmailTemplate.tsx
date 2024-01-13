import { ContactFormSchemaProps } from "@/validators/contact";
import { FC } from "react";

export const ContactEmailTemplate: FC<Readonly<ContactFormSchemaProps>> = ({
  name,
  phone,
  email,
  message,
}) => (
  <div className="w-full h-full flex flex-col justify-center bg-zinc-900 text-zinc-200">
    <h4>Novo Cliente!</h4>

    <div className="flex flex-col items-center justify-center p-4 border border-zinc-800 rounded">
      <h6>Nome</h6>
      <p>{name}</p>

      {email ? (
        <>
          <h6>E-mail</h6>
          <p>{email}</p>
        </>
      ) : (
        <>
          <h6>Telefone</h6>
          <p>{phone}</p>
        </>
      )}

      {email && phone && (
        <>
          <h6>E-mail</h6>
          <p>{email}</p>

          <h6>Telefone</h6>
          <p>{phone}</p>
        </>
      )}

      <h6>Mensagem</h6>
      <p>{message}</p>
    </div>
  </div>
);
