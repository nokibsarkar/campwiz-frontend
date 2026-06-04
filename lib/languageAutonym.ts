import { getAutonym } from '@wikimedia/language-data';

/**
 * Get the autonym (native name) for a language code.
 * Uses @wikimedia/language-data which covers all codes in i18n/locales/.
 */
export function getLanguageAutonym(code: string): string {
    return getAutonym(code);
}
