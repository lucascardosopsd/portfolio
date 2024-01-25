"use client";
import FadeDiv from "@/components/FadeDiv";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { getLang } from "@/tools/getLang";
import { watchInView } from "@/tools/watchInView";
import { TitlesData } from "@/types/titles";
import { ContactFormSchemaProps, useContactForm } from "@/validators/contact";
import { useRef, useState } from "react";
import axios from "axios";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import WhatsappIcon from "@/components/icons/Whatsapp";
import Link from "next/link";
import { socialLinks } from "@/constants";

interface ContactProps {
  titlesData: TitlesData[];
}

const Budget = ({ titlesData }: ContactProps) => {
  const sectionId = "contact";
  const titles = titlesData.filter((title) => title.section == sectionId)[0];
  const ref = useRef(null);
  const lang = getLang();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const form = useContactForm(lang);

  const onSubmit = async (formData: ContactFormSchemaProps) => {
    try {
      setLoading(true);

      await axios.post("/api/email/send", formData);

      toast({
        title: lang == "pt" ? "E-mail enviado!" : "Form sended!",
        description:
          lang == "pt"
            ? "Entrarei em contato assim que possível. Obrigado pelo interesse!"
            : "Your e-mail has sended and i'll contact you as soon as possible. Thank you!",
      });

      setLoading(false);
    } catch (error) {}
  };

  watchInView({ ref, id: sectionId });

  return (
    <FadeDiv>
      <section
        className="section-padding max-width border-t border-zinc-600 relative flex flex-col items-center"
        id={sectionId}
        ref={ref}
      >
        <Image
          src="/images/illustration-12.svg"
          alt="Illustration"
          height={0}
          width={0}
          sizes="100vh"
          className="h-[400px] w-auto absolute left-10 top-10 hidden tablet:block -z-10"
        />

        <Image
          src="/images/illustration-12.svg"
          alt="Illustration"
          height={0}
          width={0}
          sizes="100vh"
          className="h-[400px] w-auto absolute right-10 bottom-10 hidden tablet:block -z-10"
        />

        <SectionHeading
          title={titles.title[lang]}
          subtitle={titles.description[lang]}
        />

        <Link href={socialLinks.whatsapp.url}>
          <Button
            variant="outline"
            className="rounded gap-2 border-zinc-700 text-zinc-500"
          >
            <WhatsappIcon color="#71717a" />
            <p className="font-light">Whatsapp</p>
          </Button>
        </Link>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-[600px] mx-auto w-full"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{lang == "pt" ? "Nome" : "Name"}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={
                        lang == "pt" ? "Digite seu nome" : "Put your name"
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col tablet:flex-row items-center gap-4 w-full border border-zinc-600 rounded p-4 tablet:border-none tablet:p-0">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      {lang == "pt" ? "Telefone" : "Phone number"}
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder={
                          lang == "pt"
                            ? "Digite seu whatsapp"
                            : "Put your whatsapp"
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <p>{lang == "pt" ? "ou" : "or"}</p>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>{lang == "pt" ? "E-mail" : "E-mail"}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={
                          lang == "pt" ? "Digite seu e-mail" : "Put your e-mail"
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{lang == "pt" ? "Mensagem" : "Message"}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={lang == "pt" ? "Digite ..." : "Message..."}
                      {...field}
                      className="rounded"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" variant="outline" disabled={loading}>
              {lang == "pt" ? "Enviar" : "Send"}
            </Button>
          </form>
        </Form>
      </section>
    </FadeDiv>
  );
};

export default Budget;
