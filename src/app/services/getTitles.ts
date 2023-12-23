import { client } from "../../../sanity/lib/client";

export const getTitles = async () => {
  const query = `
    *[_type == "titles"]{
      skillsTitle,
      skillsSubTitle,
      benefitsTitle,
      benefitsSubTitle,
      portfolioTitle,
      portfolioSubTitle,
      techsTitle,
      techsSubTitle,
      ctaTitle,
      ctaSubTitle,
    }
    `;

  return await client.fetch(query);
};
