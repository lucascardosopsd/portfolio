import { socialLinks } from "@/constants";
import { redirect } from "next/navigation";

const successwhatsapp = () => {
  redirect(socialLinks.whatsapp.url);
};

export default successwhatsapp;
