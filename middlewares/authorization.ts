import fetchSession from "@/server/session";
import { NextRequest, NextResponse } from "next/server";

const AuthorizationMiddleWare = async (req: NextRequest) => {
    const session = await fetchSession();
    if (session === null) {
        const url = new URL('/user/login', req.nextUrl)
        url.searchParams.set('next', req.nextUrl.pathname)
        return NextResponse.redirect(url)
    }
    return NextResponse.next()
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