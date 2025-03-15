import LottieWrapper from "@/components/LottieWrapper"
import CategoryInput from "@/components/round/actions/CategoryInput"
import { Dialog, DialogContent, DialogTitle } from "@mui/material"
import { Suspense } from "react"
import startImportTask from "./action"

const P = ({ roundId }: { roundId: string }) => {
    return (
        <Dialog open={true}>
            <DialogTitle>
                Import from Commons
            </DialogTitle>
            <DialogContent>
                <Suspense fallback={<LottieWrapper src="/lottie/importing.lottie" />}>
                    <CategoryInput onSave={startImportTask.bind(null, roundId)} alreadyIncludedCategories={[]} />
                </Suspense>
            </DialogContent>
        </Dialog>
    )
}
export default P