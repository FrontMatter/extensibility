import { ContentArguments } from "../models/ScriptArguments.js";
import { CustomScript } from "./CustomScript.js";

export class ContentScript extends CustomScript {
  /**
   * Retrieve the arguments passed to the script
   * @returns
   */
  public static getArguments(): ContentArguments | undefined {
    const args = process.argv;

    const command = args[0];
    const scriptPath = args[1];
    const workspacePath = args[2];
    const filePath = args[3];
    const frontMatter = args[4];

    // Get all arguments after the file path
    const answerArgs = args.slice(5);
    const answers = answerArgs.reduce((acc, curr) => {
      const [key, value] = curr.split("=");
      acc[key] = value;
      return acc;
    }, {} as { [key: string]: string });

    return {
      command,
      scriptPath,
      workspacePath,
      filePath,
      frontMatter,
      answers: Object.keys(answers).length > 0 ? answers : undefined,
    };
  }
}
