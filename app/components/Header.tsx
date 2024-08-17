import NavLink from "./CustomLink";
import MobileMenu from "./MobileMenu";
import { navLinks } from "../constants";
import Headroom from "react-headroom";
import { getLang } from "@/tools/getLang";

const Header = () => {
  const lang = getLang();

  return (
    <>
      <div className="flex w-full items-center">
        <Headroom className="w-full hidden tablet:block">
          <header className="flex items-center justify-center h-20 max-width w-full z-10 bg-zinc-900">
            <nav className="flex items-center gap-12 max-tablet:hidden">
              <ul className="flex items-center gap-8">
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <NavLink href={link.url} label={link.label[lang]} />
                  </li>
                ))}
                {/* <Link
                  href="https://api.whatsapp.com/send?phone=5517996484654"
                  target="_blank"
                >
                  <li>
                    <button className="btn btn-primary">
                      {lang == "en" ? "Budget" : "Orçamento"}
                    </button>
                  </li>
                </Link> */}
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

export default Header;
