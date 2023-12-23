import { type SchemaTypeDefinition } from "sanity";
import hero from "./schemas/hero";
import titles from "./schemas/titles";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, titles],
};
