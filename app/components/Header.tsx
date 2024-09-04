import NavLink from "./CustomLink";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../constants";
import Headroom from "react-headroom";
import { getLang } from "@/tools/getLang";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const lang = getLang();

  return (
    <>
      <div className="flex w-full items-center">
        <Headroom className="w-full hidden tablet:block">
          <header className="flex items-center justify-center h-20 max-width w-full z-10 bg-background/75 backdrop-blur-lg">
            <nav className="flex items-center gap-12 max-tablet:hidden">
              <ul className="flex items-center gap-8">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.url} label={link.label[lang]} />
                  </li>
                ))}
                <span className="h-10 w-[1px] bg-muted-foreground" />
                <Link
                  href="https://api.whatsapp.com/send?phone=5517996484654"
                  target="_blank"
                >
                  <li>
                    <Button>{lang == "en" ? "Budget" : "Orçamento"}</Button>
                  </li>
                </Link>
                <Link
                  href={
                    lang == "en"
                      ? "https://docs.google.com/document/d/1n3v2YVbTR9mK8-eCR-CQFOc5bkTu3htdiVPVLwlKlQE/"
                      : "https://docs.google.com/document/d/1cH0bs2Guzfi3DSgWF824bJSkHivryozbp-dcBT_7Ah0/"
                  }
                  target="_blank"
                >
                  <li>
                    <Button>{lang == "en" ? "curriculum" : "Currículo"}</Button>
                  </li>
                </Link>
              </ul>
            </nav>
          </header>
        </Headroom>
      </div>
      <header className="w-full flex justify-end fixed z-50 top-2 right-2">
        <MobileMenu />
      </header>
    </>
  );
};

export default Navbar;
