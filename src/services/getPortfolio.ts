import { PortfolioDataProps } from "@/types/portfolio";
import { client } from "../../sanity/lib/client";

export const getPortfolio = async () => {
  const query = `
    *[_type == "portfolio"]{
        order,
        title,
        subTitle,
        description,
        link,
        type,
        image{
          asset -> {
            url
          }
        }
    }
    `;

  return (await client.fetch(query)) as PortfolioDataProps[];
};
