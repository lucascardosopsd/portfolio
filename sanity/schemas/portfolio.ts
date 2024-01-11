export default {
  name: "portfolio",
  type: "document",
  title: "Portfolio",
  fields: [
    {
      name: "title",
      title: "Título",
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
    {
      name: "description",
      title: "Descrição",
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
    {
      name: "image",
      type: "image",
      title: "Imagem",
    },
    {
      name: "link",
      type: "url",
      title: "Link",
    },
    {
      name: "type",
      title: "Tipo",
      type: "string",
    },
  ],
};
