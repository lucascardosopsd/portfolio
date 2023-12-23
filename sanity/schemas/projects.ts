export default {
  name: "projects",
  type: "document",
  title: "Projetos/Portfolio",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Título",
    },
    {
      name: "description",
      type: "string",
      title: "Descrição",
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
  ],
};
