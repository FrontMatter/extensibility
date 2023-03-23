<p align="center">
  <a href="https://frontmatter.codes">
    <img alt="Front Matter" src="https://eliostruyf.gallerycdn.vsassets.io/extensions/eliostruyf/vscode-front-matter/8.3.0/1676389253876/Microsoft.VisualStudio.Services.Icons.Default">
  </a>
</p>

# Front Matter CMS - Extensibility module

This module provides a way to extend the CMS with custom functionality.

## Supported extensibility points

### Content dashboard

- Card image
- Card footer

### Panel

- Custom panel view
- Custom fields

## Usage

You can make use of ESM modules in order to make use of the extensibility dependency. We recommend to use the CDN from [Skypack](https://www.skypack.dev/) or [jsdelivr](https://www.jsdelivr.com/).

URLs:

- `https://cdn.skypack.dev/@frontmatter/extensibility`
- `https://cdn.jsdelivr.net/npm/@frontmatter/extensibility/+esm`
- `https://esm.run/@frontmatter/extensibility`

### Development mode

Turn on the development mode in order to quickly reload the webviews (panel + dashboard) when you make changes to the code.

```js
import { enableDevelopmentMode } from "https://cdn.jsdelivr.net/npm/@frontmatter/extensibility/+esm";

enableDevelopmentMode();
```

### Registering a card image

```js
import { registerCardImage } from "https://cdn.jsdelivr.net/npm/@frontmatter/extensibility/+esm";

/**
 * @param {string} filePath - The path of the file
 * @param {object} data - The metadata of the file
 * @returns {string} - The HTML to be rendered in the card footer
 */
registerCardImage(async (filePath, metadata) => {
  return `<span>Your HTML</span>`;
});
```

### Registering a card footer

```js
import { registerCardFooter } from "https://cdn.jsdelivr.net/npm/@frontmatter/extensibility/+esm";

/**
 * @param {string} filePath - The path of the file
 * @param {object} data - The metadata of the file
 * @returns {string} - The HTML to be rendered in the card footer
 */
registerCardFooter(async (filePath, metadata) => {
  return `<span>Your HTML</span>`;
});
```

### Registering a panel view

```js
import { registerPanelView } from "https://cdn.jsdelivr.net/npm/@frontmatter/extensibility/+esm";

/**
 * @param {object} data - The metadata of the file
 * @returns {object} - The view to be rendered in the panel
 */
registerPanelView(async (metadata) => {
  return {
    title: "Custom View",
    content: `
      <div>
        <h1>Custom view...</h1>
        <p>Here you can add your own custom view.</p>
      </div>
    `,
  };
});
```

### Registering a custom field

The following example makes use of [lit](https://lit.dev/) to render a custom field, by creating a web component, it makes it easier to have more control over the field.

```js
import { registerCustomField } from "https://cdn.jsdelivr.net/npm/@frontmatter/extensibility/+esm";
import { css, html, LitElement } from "https://esm.run/lit";

let CustomFieldValueChange;

class CustomField extends LitElement {
  static styles = css`
    input {
      border: 1px solid transparent;
      box-sizing: border-box;
      font-family: var(--vscode-font-family);
      padding: var(--input-padding-vertical) var(--input-padding-horizontal);
      color: var(--vscode-input-foreground);
      outline: none;
      background-color: var(--vscode-input-background);
      width: 100%;
    }

    input:focus {
      border: 1px solid var(--vscode-inputValidation-infoBorder);
    }
  `;

  static properties = {
    inputValue: {
      type: String,
    },
  };

  constructor() {
    super();
    this.inputValue = "";
  }

  _internalChange(e) {
    this.inputValue = e.target.value;
    CustomFieldValueChange(e.target.value);
  }

  render() {
    return html`
      <input
        type="text"
        value="${this.inputValue}"
        @change=${(e) => this._internalChange(e)}
      />
    `;
  }
}
customElements.define("custom-field", CustomField);

/**
 * @param {string} name - The name of the custom field to use in the content-type
 * @param {function} callback - The callback that will be used for rendering the custom field
 */
registerCustomField("customField", async (value, onChange) => {
  // Bind the event handler for the onChange evet
  CustomFieldValueChange = onChange;
  // Return the HTML of the custom field
  return `
    <custom-field inputValue="${value || ""}"></custom-field>
  `;
});
```

## Issues

Please report any issues you find in the [Front Matter CMS issue list](https://github.com/estruyf/vscode-front-matter/issues).
