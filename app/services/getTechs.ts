import { client } from "../../sanity/lib/client";

export const getTechs = async () => {
  const query = `
    *[_type == "techs"]{
        order,
        title,
        logo{
          asset -> {
            url
          }
        }
    }
    `;

  return await client.fetch(query);
};
