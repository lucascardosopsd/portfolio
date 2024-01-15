import { client } from "../../sanity/lib/client";
import { FaqDataProps } from "@/types/faq";

export const getFaq = async () => {
  const query = `
    *[_type == "faq"]{
        order,
        title,
        description
    }
    `;

  return (await client.fetch(query)) as FaqDataProps[];
};
