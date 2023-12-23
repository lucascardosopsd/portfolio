import { client } from "../../sanity/lib/client";

export const getCta = async () => {
  const query = `
    *[_type == "cta"]{
        title,
        subTitle,
    }
    `;

  return await client.fetch(query);
};
