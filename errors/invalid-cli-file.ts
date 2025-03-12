export class InvalidCLIFileError extends Error {
  public name: string = "Invalid CLI File";

  constructor() {
    super("CLI File is Invalid");
  }
}
