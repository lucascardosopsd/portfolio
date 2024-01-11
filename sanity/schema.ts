import { type SchemaTypeDefinition } from "sanity";
import hero from "./schemas/hero";
import titles from "./schemas/titles";
import skills from "./schemas/skills";
import benefits from "./schemas/benefits";
import techs from "./schemas/techs";
import cta from "./schemas/cta";
import portfolio from "./schemas/portfolio";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, titles, skills, benefits, portfolio, techs, cta],
};
