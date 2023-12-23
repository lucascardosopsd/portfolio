import { client } from "../../sanity/lib/client";

export const getSkills = async () => {
  const query = `
    *[_type == "skills"]{
        title,
        description,
        slIconName,
    }
    `;

  return await client.fetch(query);
};
