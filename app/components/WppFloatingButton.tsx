"use client";
import { getLang } from "@/tools/getLang";
import Link from "next/link";
import { PiWhatsappLogoThin } from "react-icons/pi";

const WppFloatingButton = () => {
  const lang = getLang();

  return (
    <div className="fixed z-20 bottom-4 right-4 block tablet:hidden bg-background">
      <Link href="https://api.whatsapp.com/send?phone=5517996484654">
        <div className="flex items-center justify-center border border-green-500 bg-background text-green-500 rounded h-32 w-16 flex-col gap-2 z-10 relative">
          <PiWhatsappLogoThin className="text-3xl" />
          <p className="text-xs text-center">
            {lang == "pt" ? "Tire suas dúvidas" : "Text to me"}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default WppFloatingButton;
