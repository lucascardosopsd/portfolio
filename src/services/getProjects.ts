import { client } from "../../sanity/lib/client";

export const getProjects = async () => {
  const query = `
    *[_type == "projects"]{
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
