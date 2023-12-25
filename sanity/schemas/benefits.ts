export default {
  name: "benefits",
  type: "document",
  title: "Vantagens",
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
  ],
};
