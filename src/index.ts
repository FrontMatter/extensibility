import { PanelViewResult } from "./models/PanelViewResult.js";

declare global {
  interface Window {
    fmExternal: {
      isDevelopment: boolean;
      getCustomFields: {
        name: string;
        html: (
          data: any,
          change: (value: any) => void
        ) => Promise<{ title: string; content: string } | undefined>;
      }[];
      getPanelView: (data: any) => Promise<PanelViewResult | undefined>;
      getCardImage: (
        filePath: string,
        data: any
      ) => Promise<string | undefined>;
      getCardFooter: (
        filePath: string,
        data: any
      ) => Promise<string | undefined>;

      // 8.5.0 extension version
      getCardTitle: (
        filePath: string,
        data: any
      ) => Promise<string | undefined>;
      getCardDescription: (
        filePath: string,
        data: any
      ) => Promise<string | undefined>;
      getCardTags: (
        filePath: string,
        data: any
      ) => Promise<string[] | undefined>;
      getCardDate: (filePath: string, data: any) => Promise<string | undefined>;
      getCardStatus: (
        filePath: string,
        data: any
      ) => Promise<string | undefined>;
    };
  }
}

export * from "./ui/index.js";
export * from "./scripts/index.js";
