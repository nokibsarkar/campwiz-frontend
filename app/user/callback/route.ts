import { loginCallbackAction } from "@/provider/session/action";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    const origin = req.nextUrl.origin;
    const searchParams = req.nextUrl.searchParams;
    const code = searchParams.get('code');
    if (!code) {
        return NextResponse.redirect(new URL(`/user/callback/error?error=Missing code`, origin).toString());
    }
    const state = searchParams.get('state');
    if (!state) {
        return NextResponse.redirect(new URL(`/user/callback/error?error=Missing state`, origin).toString());
    }
    const res = await loginCallbackAction(code, state);
    if (res.status === 302) {
        const url = new URL(res.headers.get('Location') || '/', origin);
        const response = NextResponse.redirect(url.toString());
        for (const [key, value] of res.headers.entries()) {
            if (key.toLowerCase() === 'set-cookie') {
                response.headers.append('Set-Cookie', value)
            }
        }
        return response
    }
    const j = await res.json();
    const qs = new URLSearchParams({
        error: j.detail,
        state
    }).toString();
    const response = NextResponse.redirect(new URL(`/user/callback/error?${qs}`, origin).toString());
    return response
}