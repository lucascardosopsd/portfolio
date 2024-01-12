export default {
  name: "titles",
  type: "document",
  title: "Títulos",
  fields: [
    {
      name: "section",
      type: "string",
      title: "Nome do ID da seção",
    },
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
  ],
};
