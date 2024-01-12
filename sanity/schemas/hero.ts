export default {
  name: "hero",
  type: "document",
  title: "Cabeçalho",
  fields: [
    {
      name: "highlights",
      title: "Destaques",
      type: "array",
      of: [
        {
          type: "object",
          name: "highlight",
          title: "Destaque",
          fields: [
            {
              name: "title",
              title: "Título",
              type: "string",
            },
            {
              name: "subTitle",
              title: "Sub Título",
              type: "object",
              fields: [
                {
                  title: "Português",
                  name: "pt",
                  type: "string",
                },
                {
                  title: "Inglês",
                  name: "en",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },

    {
      name: "pic",
      type: "image",
      title: "Foto",
    },
  ],
};
