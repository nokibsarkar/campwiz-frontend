
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { Round } from "@/types/round";
import P from "./_page";

type CommonsImportPageProps = {
    params: Promise<
        { roundId: string }
    >
}
const CommonsImportPage = async ({ params }: CommonsImportPageProps) => {
    const { roundId } = await params;
    const roundResponse = await fetchAPIFromBackendSingleWithErrorHandling<Round>(`/round/${roundId}`);
    if ('detail' in roundResponse) {
        throw new Error(roundResponse.detail)
    }
    const round = roundResponse.data;
    console.log(round)
    return (
        <P roundId={roundId} />
    )
}
export default CommonsImportPage