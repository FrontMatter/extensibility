import { ScriptArguments } from "../models/ScriptArguments.js";
import { Question } from "./../models/Question.js";

export abstract class CustomScript {
  /**
   * Call this method to ask questions to the user
   * @param questions
   */
  public static askQuestions(questions: Question[]): void {
    console.log(
      JSON.stringify({
        questions: questions,
      })
    );
  }

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

  /**
   * Call this method to indicate that the script has finished.
   * @param log
   */
  public static done(log: string): void {
    console.log(log);
  }
}
