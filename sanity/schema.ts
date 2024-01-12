import { type SchemaTypeDefinition } from "sanity";
import hero from "./schemas/hero";
import titles from "./schemas/titles";
import techs from "./schemas/techs";
import portfolio from "./schemas/portfolio";
import faq from "./schemas/faq";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, titles, portfolio, techs, faq],
};
