import { client } from "../../sanity/lib/client";

export const getPortfolio = async () => {
  const query = `
    *[_type == "portfolio"]{
        title,
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

  return await client.fetch(query);
};
