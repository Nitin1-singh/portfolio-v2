import { z } from "zod";

export const contactSchemaZ = z.object({
  email: z.string().email(),
  title: z.string().min(5, "Title must be of at least 5 characters"),
  message: z.string().min(10, "Message must be of at least 10 characters")
})

export type contactSchemaT = z.infer<typeof contactSchemaZ>;