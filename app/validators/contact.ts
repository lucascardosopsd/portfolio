"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

export interface ContactFormSchemaProps {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export const useContactForm = (lang: string) => {
  return useForm<ContactFormSchemaProps>({
    resolver: zodResolver(
      z
        .object({
          name: z
            .string({
              required_error:
                lang == "pt" ? "Digite seu nome" : "Put your name",
            })
            .min(3)
            .max(50),
          phone: z.string({
            required_error:
              lang == "pt" ? "Digite seu telefone" : "Put your phone",
          }),
          email: z.string({
            required_error:
              lang == "pt" ? "Digite seu email" : "Put your email",
          }),
          message: z.string({
            required_error:
              lang == "pt" ? "Digite a mensagem" : "Put the message",
          }),
        })
        .required()
        .refine((data) => {
          if (data.phone && !data.email) {
            throw {
              email:
                lang == "pt"
                  ? "E-mail necessário se não houver telefone"
                  : "E-mail is required if phone is missing",
            };
          }
          if (data.email && !data.phone) {
            throw {
              phone:
                lang == "pt"
                  ? "Telefone necessário se não houver telefone"
                  : "Phone Number is required if phone is missing",
            };
          }
          return true;
        })
    ),
  });
};
