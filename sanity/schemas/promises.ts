export default {
  name: "promises",
  type: "document",
  title: "Promessas",
  fields: [
    {
      name: "promiseTitle",
      title: "Título da Promessa",
      type: "string",
    },
    {
      name: "order",
      title: "Posição",
      type: "string",
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
  ],
};
