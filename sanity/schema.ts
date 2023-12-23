import { type SchemaTypeDefinition } from "sanity";
import hero from "./schemas/hero";
import titles from "./schemas/titles";
import skills from "./schemas/skills";
import benefits from "./schemas/benefits";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, titles, skills, benefits],
};
