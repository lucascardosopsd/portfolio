import { client } from "../../sanity/lib/client";

export const getBenefits = async () => {
  const query = `
    *[_type == "hero"]{
      title,
      description,
    }
    `;

  return await client.fetch(query);
};
