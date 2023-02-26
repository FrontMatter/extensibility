# Front Matter CMS - Extensibility module

This module provides a way to extend the CMS with custom functionality.

## Usage

```js
import { registerCardFooter } from "https://cdn.skypack.dev/@frontmatter/extensibility";

registerCardFooter(async (filePath, data) => {
  return `<span>Your HTML</span>`;
});
```

## Issues

Please report any issues you find in the Front Matter CMS issue list.
