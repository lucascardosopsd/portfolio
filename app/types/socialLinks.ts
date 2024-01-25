import { IconType } from "react-icons";

export interface SocialLinksProps {
  [key: string]: {
    icon: IconType;
    url: string;
  };
}
