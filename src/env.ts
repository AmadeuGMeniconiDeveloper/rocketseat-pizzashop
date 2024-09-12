import { z } from "zod";

export const evnSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENABLE_API_REQUEST_THROTTLE: z
    .string()
    .transform((val) => val === "true"),
});

export const env = evnSchema.parse(import.meta.env);
