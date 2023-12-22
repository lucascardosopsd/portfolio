import Link from "next/link";
import NavLink from "./CustomLink";
import { Phone } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../constants";
import Headroom from "react-headroom";
import Logo from "./Logo";

const Header = () => {
  return (
    <>
      <div className="flex w-full items-center border-b border-peach ">
        <Headroom className="w-full hidden tablet:block justify-end bg-peach-600">
          <header className="flex items-center justify-between h-20 max-width w-full z-10 bg-peach-600">
            <Logo />
            <nav className="flex items-center gap-12 max-tablet:hidden">
              <ul className="flex items-center gap-8">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.url} label={link.label} />
                  </li>
                ))}
                <Link
                  href="https://api.whatsapp.com/send?phone=5517996484654"
                  className="btn btn-primary"
                >
                  <Phone size={24} />
                  Fale Comigo
                </Link>
              </ul>
            </nav>
          </header>
        </Headroom>
      </div>
      <header className="flex items-center justify-between h-20 max-width border-peach w-full z-10 tablet:hidden sticky top-0 bg-peach-600">
        <Logo />
        <MobileMenu />
      </header>
    </>
  );
};

export default Header;
