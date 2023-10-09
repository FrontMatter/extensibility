export interface ScriptArguments {
  // Key 0
  command: string;
  // Key 1
  scriptPath: string;
  // Key 2
  workspacePath: string;
  // Key 3
  filePath: string;
  // Key 4
  frontMatter?: any;
  // Key 4 - 5 depending on content or media script
  answers?: Answer;
}

export interface Answer {
  [key: string]: string;
}
