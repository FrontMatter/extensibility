import { ScriptArguments } from "../models/ScriptArguments.js";
import { CustomScript } from "./CustomScript.js";

export class MediaScript implements CustomScript {
  /**
   * Retrieve the arguments passed to the script
   * @returns
   */
  public static getArguments(): ScriptArguments {
    const args = process.argv;

    const command = args[0];
    const scriptPath = args[1];
    const workspacePath = args[2];
    const filePath = args[3];
  }
}
