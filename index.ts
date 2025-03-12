#!/usr/bin/env node

import { loadCLIFile, loadCommands } from "@/core/index.js";
import { argv, exit } from "node:process";
import { execFile } from "node:child_process";
import { promisify } from 'node:util';

const exec = promisify(execFile);

export async function commandLineInterface() {
  const CLIFile = await loadCLIFile();
  const args = argv.slice(2);

  const commands = loadCommands(CLIFile);

  if (args.length === 0 || !(args[0] in commands)) {
    console.log("Display Help");
    exit(0);
  }

  const { stdout } = await exec("node", args);

  // const outCollection = await stdout.toArray()!;

  // if (outCollection.length > 0) {
  //   outCollection.forEach((output: string) => {
  //     console.log(output.slice(0, output.length - 1));
  //   });
  // }

  console.log(stdout);

  exit(0);
}

await commandLineInterface();
