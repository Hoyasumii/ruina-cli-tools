#!/usr/bin/env node

import { loadCLIFile, loadCommands } from "@/core";
import { argv } from "node:process";
import { execFile } from "node:child_process";

export async function commandLineInterface() {
  const CLIFile = await loadCLIFile();
  const args = argv.slice(2);

  const commands = loadCommands(CLIFile);

  if (args.length === 0 || !(args[0] in commands)) console.log("Display Help");

  const { stdout } = execFile("node", args);

  const outCollection = await stdout?.toArray()!;

  if (outCollection.length > 0) {
    outCollection.forEach((output: string) => {
      console.log(output.slice(0, output.length - 1));
    });
  }
}

await commandLineInterface();
