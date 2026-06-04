# Language Autonyms

## Overview

Language display names in the language picker are provided by the
[`@wikimedia/language-data`](https://www.npmjs.com/package/@wikimedia/language-data)
library. This library is maintained by the Wikimedia Foundation and provides
canonical autonyms for 500+ languages.

## How it works

1. The list of supported languages is generated from the `i18n/locales/`
   subdirectories (excluding `qqq`) into `i18n/languages.generated.ts`.
2. The language picker in `components/user/Setting.tsx` calls
   `getLanguageAutonym(code)` from `lib/languageAutonym.ts` to display
   each language in its native script.
3. Adding a new locale directory automatically makes the language available
   in the picker after regeneration.

## Regenerating the language list

```bash
node scripts/generate-languages.js
```

This runs automatically before `dev` and `build` via the `predev`/`prebuild`
npm scripts.

## Adding a new language

1. Create a new directory under `i18n/locales/` with the language code
   (e.g. `i18n/locales/sw/translation.json`).
2. Run `node scripts/generate-languages.js` (or start the dev server).
3. Verify the code is recognized: `node -e "const ld = require('@wikimedia/language-data'); console.log(ld.getAutonym('sw'))"`

If the code is not recognized by the library, add an override in
`lib/languageAutonym.ts`.
