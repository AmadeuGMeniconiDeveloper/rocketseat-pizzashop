import { z } from "zod";

export const evnSchema = z.object({
  VITE_API_URL: z.string().url(),
});

export const env = evnSchema.parse(import.meta.env);
