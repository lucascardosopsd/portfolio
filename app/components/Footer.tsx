import Link from "next/link";
import CustomLink from "./CustomLink";
import { contactDetails, navLinks, socialLinks } from "../constants";
import { getLang } from "@/tools/getLang";

const Footer = () => {
  const lang = getLang();

  return (
    <footer className="py-10 border-t border-zinc-600 max-width bg-zinc-800">
      <div className="flex item-center justify-between">
        <Link href="/" className="text-purple text-xl font-semibold">
          Lucas Cardoso
        </Link>
        <nav className="flex gap-12 max-tablet:hidden">
          <ul className="flex items-center gap-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <CustomLink href={link.url} label={link.label[lang]} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex gap-3">
          {Object.keys(socialLinks).map((key: string) => {
            const url = socialLinks[key].url;
            const Icon = socialLinks[key].icon;

            return (
              <Link
                target="_blank"
                href={url}
                className="w-10 h-10 bg-purple text-white flex items-center justify-center rounded transition hover:scale-125"
                key={key}
              >
                <Icon size={36} />
              </Link>
            );
          })}
        </div>
      </div>

      {/* Contact Details */}

      <div className="w-max border border-zinc-600 p-5 mx-auto flex gap-5 tablet:gap-10 flex-col tablet:flex-row items-center rounded-lg mt-5">
        {contactDetails.map((detail, index) => (
          <div key={index} className="flex gap-3 items-center text-purple ">
            <detail.icon size={20} />
            <p className="text-zinc-100">{detail.text}</p>
          </div>
        ))}
      </div>

      <p className="text-center mt-2 text-sm">
        Copyright © {new Date().getFullYear()} Lucas Cardoso
      </p>
    </footer>
  );
};

export default Footer;
