import { PromisesDataProps } from "@/types/promises";
import { client } from "../../sanity/lib/client";

export const getPromises = async () => {
  const query = `
    *[_type == "promises"]{
        order,
        title
    }
    `;

  return (await client.fetch(query)) as PromisesDataProps[];
};
