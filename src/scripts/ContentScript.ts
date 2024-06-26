import { ContentArguments } from "../models/ScriptArguments.js";
import { getArguments } from "../utils/getArguments.js";
import { CustomScript } from "./CustomScript.js";

export class ContentScript extends CustomScript {
  /**
   * Retrieve the arguments passed to the script
   * @returns
   */
  public static getArguments = (): ContentArguments | undefined =>
    getArguments();

  /**
   * Call this method to update the front matter
   * @param data
   */
  public static updateFrontMatter(data: { [fieldName: string]: any }): void {
    console.log(
      JSON.stringify({
        frontmatter: data,
      })
    );
  }
}
