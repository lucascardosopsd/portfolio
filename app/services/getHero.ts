import { client } from "../../sanity/lib/client";

export const getHero = async () => {
  const query = `
    *[_type == "hero"]{
        greeting,
        leftTitle,
        leftDescription,
        rightTitle,
        rightDescription,
        highlights[]{
          title,
          subTitle
        },
        pic{
          asset -> {
            url
          }
        }
    }
    `;

  return await client.fetch(query);
};
