import { ContactEmailTemplate } from "@/components/ContactEmailTemplate";
import { ContactFormSchemaProps } from "@/validators/contact";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ExtendedNextApiRequest extends NextApiRequest {
  body: ContactFormSchemaProps;
}

export async function POST(req: ExtendedNextApiRequest, res: NextApiResponse) {
  console.log(req.body);

  try {
    await resend.emails.send({
      from: req.body.email ? req.body.email : "clientPortfolio@dev.com",
      to: ["lucascardosopsd@gmail.com"],
      subject: "Novo Cliente!",
      text: "",
      react: ContactEmailTemplate(req.body),
    });

    return new NextResponse(JSON.stringify({ ok: true }), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ ok: false }), { status: 500 });
  }
}
