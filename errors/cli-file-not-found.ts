export class CLIFileNotFoundError extends Error {
  public name: string = "CLI File Not Found";

  constructor() {
    super(`CLI File is not Exists`);
  }
}
