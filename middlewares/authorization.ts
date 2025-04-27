import fetchSession from "@/server/session";
import { NextRequest, NextResponse } from "next/server";
// import LanguageDetectorMiddleware from "./languageDetector";
const serverId = `${process.env.FRONTEND_SERVER_ID}:${process.env.PORT}`;
const AuthorizationMiddleWare = async (req: NextRequest) => {
    // await LanguageDetectorMiddleware(req);
    if (req.nextUrl.pathname.match(/\/$/))
        return NextResponse.next({
            headers: {
                'X-Frontend-Server-Id': serverId,
            }
        })
    if (!req.nextUrl.pathname.startsWith('/user/login')) {
        const session = await fetchSession();
        if (session === null) {
            const url = new URL('/user/login', req.nextUrl)
            url.searchParams.set('next', req.nextUrl.pathname)
            return NextResponse.redirect(url, {
                headers: {
                    'X-Frontend-Server-Id': serverId,
                }
            })
        }

    }
    return NextResponse.next({
        headers: {
            'X-Frontend-Server-Id': serverId,
        }
    })
}
export const AuthorizationConfig = {
    matcher: [
        /*
        * Match all request paths except for the ones starting with:
        * - api (API routes)
        * - _next/static (static files)
        * - _next/image (image optimization files)
        * - favicon.ico, sitemap.xml, robots.txt (metadata files)
        */
        '/((?!user/(?:login|callback)i|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ]
}
export default AuthorizationMiddleWare;