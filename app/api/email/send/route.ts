import { ContactEmailTemplate } from "@/components/ContactEmailTemplate";
import { ContactFormSchemaProps } from "@/validators/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = (await req.json()) as ContactFormSchemaProps;

  if (!body) {
    return new NextResponse(JSON.stringify({ ok: false }), { status: 401 });
  }

  try {
    await resend.emails.send({
      from: "portfolio@resend.dev",
      to: ["lucascardosopsd@gmail.com"],
      subject: `Novo Cliente: ${body.name}`,
      react: ContactEmailTemplate(body),
      text: "",
    });

    return new NextResponse(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ ok: false }), { status: 500 });
  }
}
