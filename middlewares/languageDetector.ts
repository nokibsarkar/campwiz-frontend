import { cookieName, fallbackLng, languages } from "@/i18n/settings"
import type { Language } from "@/types/i18n"
import acceptLanguage from 'accept-language'
import { cookies } from "next/headers"
import { NextRequest } from "next/server"
acceptLanguage.languages(languages)
const LanguageDetectorMiddleware = async (req: NextRequest) => {
    let lng: Language | null = fallbackLng
    if (req.cookies.has(cookieName))
        lng = acceptLanguage.get(req.cookies.get(cookieName)?.value) as Language
    if (!lng)
        lng = acceptLanguage.get(req.headers.get('Accept-Language')) as Language
    if (!lng)
        lng = fallbackLng
    if (!languages.includes(lng))
        lng = fallbackLng
    const cookieStore = await cookies();
    console.log("Detected language", lng)
    cookieStore.set(cookieName, lng, { path: '/', httpOnly: false, sameSite: 'strict' })
}
export default LanguageDetectorMiddleware;