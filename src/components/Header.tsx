import Link from "next/link";
import NavLink from "./CustomLink";
import { Phone } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../constants";

const Header = () => {
  return (
    <header className="flex items-center justify-between h-20 max-width border-b border-peach fixed top-0 w-full z-20 bg-peach-600">
      <Link href="/">
        <h5 className="text-purple text-xl font-semibold">Lucas Cardoso</h5>
      </Link>
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
      <MobileMenu />
    </header>
  );
};

export default Header;
