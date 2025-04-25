
import AlreadyEvaluatedPagination from "./page/[minimumEvaluationId]/page";
const Page = async ({ params }: { params: Promise<{ roundId: string }> }) => {
    const { roundId } = await params;
    return <AlreadyEvaluatedPagination params={Promise.resolve({
        minimumEvaluationId: '',
        roundId
    })} />

}
export default Page