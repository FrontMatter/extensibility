declare global {
  interface Window {
    fmExternal: {
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
    };
  }
}

// Interfaces

export interface PanelViewResult {
  title: string;
  content: string;
}

// Dashboard

/**
 * Register a card image renderer
 * @param cb
 */
export const registerCardImage = (
  cb: (filePath: string, metadata: any) => Promise<string>
) => {
  window.fmExternal = window.fmExternal || {};

  window.fmExternal.getCardImage = cb;
};

/**
 * Register a card footer renderer
 * @param cb
 */
export const registerCardFooter = (
  cb: (filePath: string, metadata: any) => Promise<string>
) => {
  window.fmExternal = window.fmExternal || {};

  window.fmExternal.getCardFooter = cb;
};

// Panel

/**
 * Register a panel view renderer
 * @param cb
 */
export const registerPanelView = (
  cb: (metadata: any) => Promise<PanelViewResult | undefined>
) => {
  window.fmExternal = window.fmExternal || {};

  window.fmExternal.getPanelView = cb;
};

/**
 * Register a custom field
 * @param name
 * @param cb
 */
export const registerCustomField = (name: string, cb: any) => {
  window.fmExternal = window.fmExternal || {};
  window.fmExternal.getCustomFields = window.fmExternal.getCustomFields || [];

  const fieldRef = window.fmExternal.getCustomFields.find(
    (x) => x.name === name
  );
  if (fieldRef) {
    fieldRef.html = cb;
  } else {
    window.fmExternal.getCustomFields.push({ name, html: cb });
  }
};
