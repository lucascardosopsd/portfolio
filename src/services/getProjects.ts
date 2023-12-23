import { client } from "../../sanity/lib/client";

export const getProjects = async () => {
  const query = `
    *[_type == "projects"]{
        title,
        description,
        image{
          asset -> {
            url
          }
        },
        link,
    }
    `;

  return await client.fetch(query);
};
