import { client } from "../../sanity/lib/client";

export const getCta = async () => {
  const query = `
    *[_type == "cto"]{
        title,
        subTitle,
    }
    `;

  return await client.fetch(query);
};
