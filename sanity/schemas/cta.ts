export default {
  name: "cta",
  type: "document",
  title: "Call to Action",
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
};
