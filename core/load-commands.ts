import { ReadCLIFile } from "@/models/index.js";

export function loadCommands(CLIFile: ReadCLIFile): Record<string, string> {
  const commands: Record<string, string> = {};

  CLIFile.commands.forEach((command) => {
    commands[command.title] = command.action;
  });

  return commands;
}
