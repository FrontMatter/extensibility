declare global {
  interface Window {
    fmExternal: {
      getCardFooter: (filePath: string, data: any) => Promise<string>;
    };
  }
}

export const registerCardFooter = (
  cb: (filePath: string, data: any) => Promise<string>
) => {
  window.fmExternal = window.fmExternal || {};

  window.fmExternal.getCardFooter = cb;
};
