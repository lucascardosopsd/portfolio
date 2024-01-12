import { PortfolioDataProps } from "@/types/portfolio";
import { client } from "../../sanity/lib/client";

export const getFaq = async () => {
  const query = `
    *[_type == "faq"]{
        order,
        title,
        description
    }
    `;

  return (await client.fetch(query)) as PortfolioDataProps[];
};
