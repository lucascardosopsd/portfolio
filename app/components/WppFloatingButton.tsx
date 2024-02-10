"use client";
import { getLang } from "@/tools/getLang";
import Link from "next/link";
import { PiWhatsappLogoThin } from "react-icons/pi";

const WppFloatingButton = () => {
  const lang = getLang();

  return (
    <div className="fixed z-20 bottom-4 right-4 block tablet:hidden">
      <Link
        href="https://api.whatsapp.com/send?phone=5517996484654"
        className="relative"
      >
        <div className="flex items-center justify-center border border-border bg-zinc-900 text-red rounded h-32 w-16 flex-col gap-2 z-10">
          <PiWhatsappLogoThin className="text-3xl" />
          <p className="text-xs text-center">
            {lang == "pt" ? "Fale comigo" : "Text to me"}
          </p>
        </div>

        <div className="h-16 w-16 bg-foreground absolute -z-10 animate-ping rounded-full inset-0 m-0" />
      </Link>
    </div>
  );
};

export default WppFloatingButton;
