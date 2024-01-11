export default {
  name: "hero",
  type: "document",
  title: "Cabeçalho",
  fields: [
    {
      name: "leftTitle",
      title: "Título Esquerdo",
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
      name: "leftDescription",
      title: "Descrição Esquerda",
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
      name: "rightTitle",
      title: "Título Esquerdo",
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
      name: "rightDescription",
      title: "Descrição Esquerda",
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
