import { navLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 border-t border-peach max-width">
      <div className="flex item-center justify-between">
        <Link href="/" className="text-purple text-xl font-semibold">
          Lucas Cardoso
        </Link>
        <nav>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
