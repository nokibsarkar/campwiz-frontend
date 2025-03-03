"use server";

import { fetchFromBackend } from "@/server";
import { redirect } from "next/navigation";


export const loginInitiateAction = async (pathName: string | null) => {
    const qs = pathName ? `?next=${pathName}` : '/'
    const res = await fetchFromBackend('/user/login?' + qs, {
        redirect: 'manual'
    });
    if (res.status === 302) {
        const location = res.headers.get('Location')
        if (location) {
            return redirect(location)
        } else {
        }
    }
}
export const loginCallbackAction = async () => {
    console.log('Login Callback')
}
export default loginInitiateAction