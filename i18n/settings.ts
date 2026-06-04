import { languages } from './languages.generated'

export const fallbackLng = 'en'
export { languages }
export const defaultNS = 'translation'
export const cookieName = 'i18next'

export default function getOptions(lng = fallbackLng, ns = defaultNS) {
    return {
        debug: process.env.NODE_ENV === 'development',
        supportedLngs: languages,
        fallbackLng,
        lng,
        fallbackNS: defaultNS,
        defaultNS,
        ns
    }
}
