import { fetchFromBackend } from "@/server";
import { NextRequest } from "next/server";
export async function GET(req: NextRequest, { params }: { params: Promise<{ roundId: string }> }) {
    const { roundId } = await params
    const datastream = await fetchFromBackend(`/api/v2/round/${roundId}/results/csv`);
    const stream = datastream.body
    if (!stream) {
        return new Response(null, { status: 404 })
    }
    return new Response(stream, {
        headers: datastream.headers
    })
}