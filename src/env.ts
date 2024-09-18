import { z } from "zod";

export const evnSchema = z.object({
  MODE: z.enum(["development", "production", "test"]),
  VITE_API_URL: z.string(),
  VITE_ENABLE_API_REQUEST_THROTTLE: z
    .string()
    .transform((val) => val === "true"),
});

export const env = evnSchema.parse(import.meta.env);
