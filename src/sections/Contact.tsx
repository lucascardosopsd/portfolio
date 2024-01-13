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
import { useRef } from "react";
import axios from "axios";

interface ContactProps {
  titlesData: TitlesData[];
}

const Budget = ({ titlesData }: ContactProps) => {
  const sectionId = "contact";
  const titles = titlesData.filter((title) => title.section == sectionId)[0];
  const ref = useRef(null);
  const lang = getLang();
  const { toast } = useToast();

  const form = useContactForm(lang);

  const onSubmit = async (formData: ContactFormSchemaProps) => {
    try {
      await axios.post("/api/email/send", formData);

      toast({
        title: lang == "pt" ? "E-mail enviado!" : "Form sended!",
        description:
          lang == "pt"
            ? "Entrarei em contato assim que possível. Obrigado pelo interesse!"
            : "Your e-mail has sended and i'll contact you as soon as possible. Thank you!",
      });
    } catch (error) {}
  };

  watchInView({ ref, id: sectionId });

  return (
    <FadeDiv>
      <section
        className="section-padding max-width border-t border-zinc-600"
        id={sectionId}
        ref={ref}
      >
        <SectionHeading
          title={titles.title[lang]}
          subtitle={titles.description[lang]}
        />

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 max-w-[600px] mx-auto"
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
              <p className="tablet:mt-6">{lang == "pt" ? "ou" : "or"}</p>
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
                    <Input
                      placeholder={lang == "pt" ? "Digite ..." : "Message..."}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" variant="outline">
              {lang == "pt" ? "Enviar" : "Send"}
            </Button>
          </form>
        </Form>
      </section>
    </FadeDiv>
  );
};

export default Budget;
