import { ReadCLIFile } from "@/models/index.js";
import { readFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { CLIFileNotFoundError, InvalidCLIFileError } from "@/errors/index.js";

export async function loadCLIFile(): Promise<ReadCLIFile> {
  const CLIFilePath = path.join(process.env.PWD!, "cli.json");

  if (!existsSync(CLIFilePath)) throw new CLIFileNotFoundError();

  const fileBuffer = await readFile(CLIFilePath);
  const jsonFile = JSON.parse(fileBuffer.toString("utf-8"));

  const CLIFileParsed = ReadCLIFile.safeParse(jsonFile);

  if (!CLIFileParsed.success) throw new InvalidCLIFileError();

  return CLIFileParsed.data;
}
