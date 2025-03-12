import { z } from "zod";

export const ReadCLIFile = z.object({
  name: z.string(),
  description: z.string(),
  commands: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      action: z.string(),
    })
  ),
});

export type ReadCLIFile = z.infer<typeof ReadCLIFile>;
