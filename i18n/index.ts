import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import getOptions, { defaultNS } from './settings'
import type { Language, TranslationNamespace, UseTranslationOptions } from '@/types/i18n'

const initI18next = async (lng?: Language, ns?: TranslationNamespace) => {
    const i18nInstance = createInstance()
    await i18nInstance
        .use(initReactI18next)
        .use(resourcesToBackend((language: Language, namespace: TranslationNamespace) => import(`./locales/${language}/${namespace}.json`)))
        .init(getOptions(lng, ns))
    return i18nInstance
}

export async function useTranslation(lng?: Language, ns?: TranslationNamespace, options?: UseTranslationOptions) {
    ns = ns || defaultNS
    const i18nextInstance = await initI18next(lng, ns)
    return {
        t: i18nextInstance.getFixedT(i18nextInstance.language, Array.isArray(ns) ? ns[0] : ns, options?.keyPrefix),
        i18n: i18nextInstance
    }
}