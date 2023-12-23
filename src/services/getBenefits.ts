import { client } from "../../sanity/lib/client";

export const getBenefits = async () => {
  const query = `
    *[_type == "benefits"]{
      title,
      description,
    }
    `;

  return await client.fetch(query);
};
