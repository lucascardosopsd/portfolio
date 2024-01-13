import { ContactEmailTemplate } from "@/components/ContactEmailTemplate";
import { ContactFormSchemaProps } from "@/validators/contact";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = (await req.json()) as ContactFormSchemaProps;

  try {
    await resend.emails.send({
      from: body?.email ? body?.email : "clientPortfolio@dev.com",
      to: ["lucascardosopsd@gmail.com"],
      subject: `Novo Cliente: ${body.name}`,
      text: "",
      react: ContactEmailTemplate(body),
    });

    return new NextResponse(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ ok: false }), { status: 500 });
  }
}
