import { client } from "../../sanity/lib/client";

export const getTitles = async () => {
  const query = `
    *[_type == "titles"]{
      order,
      section,
      title,
      description
    }
    `;

  return await client.fetch(query);
};
