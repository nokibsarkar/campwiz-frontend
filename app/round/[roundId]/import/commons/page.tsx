
import fetchAPIFromBackendSingleWithErrorHandling from "@/server";
import { Round } from "@/types/round";
import { Container, Typography } from "@mui/material";
import { lazy, Suspense } from "react";
const CategoryInput = lazy(() => import('@/components/round/actions/CategoryInput'));
import startImportTask from "./action";

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
    console.log(round);
    return (
        <Container>
            <Typography variant="h4">Import from Commons</Typography>
            <Suspense fallback={<Typography>Loading...</Typography>}>
                <CategoryInput onSave={startImportTask.bind(null, roundId)} alreadyIncludedCategories={[]} />
            </Suspense>
        </Container>
    )
}
export default CommonsImportPage