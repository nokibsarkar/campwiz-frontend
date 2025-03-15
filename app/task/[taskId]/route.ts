import { fetchFromBackend } from "@/server";
import { NextRequest } from "next/server";
export async function GET(req: NextRequest, { params }: { params: Promise<{ taskId: string }> }) {
    const { taskId } = await params
    const datastream = await fetchFromBackend(`/api/v2/task/${taskId}/stream`);
    const stream = datastream.body
    if (!stream) {
        return new Response(null, { status: 404 })
    }
    return new Response(stream, {
        headers: datastream.headers
    })
}