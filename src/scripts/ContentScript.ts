import { ScriptArguments } from "../models/ScriptArguments.js";
import { CustomScript } from "./CustomScript.js";

export class MediaScript implements CustomScript {
  /**
   * Retrieve the arguments passed to the script
   * @returns
   */
  public static getArguments(): ScriptArguments {
    // To be implemented by the script
  }
}
