#!/usr/bin/env node

import { loadCLIFile, loadCommands } from "@/core/index.js";
import { argv, exit } from "node:process";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const exec = promisify(execFile);

export async function commandLineInterface() {
  const CLIFile = await loadCLIFile();
  const args = argv.slice(2);

  const commands = loadCommands(CLIFile);

  if (args.length === 0 || !(args[0] in commands)) {
    console.log("Display Help");
    exit(0);
  }

  const [commandName, ...otherArgs] = args;

  const { stdout } = await exec("node", [commands[commandName], ...otherArgs]);

  console.log(stdout);

  exit(0);
}

await commandLineInterface();
