import { Suspense, useState } from "react"
import startImportTask from "./action"
import StatusThingy from "./importingStatusSthingy"
import LottieWrapper from "@/components/LottieWrapper"
import CategoryInput from "@/components/round/actions/CategoryInput"

type ImportWidgetProps = {
    roundId: string
    importing: boolean
    setImporting: (loading: boolean) => void
    afterImport: () => void
}
const ImportWidget = ({ roundId, importing, setImporting, afterImport }: ImportWidgetProps) => {
    const [taskID, setTaskID] = useState('')
    const startImporting = async (categories: string[]) => {
        try {
            setImporting(true)
            const taskResponse = await startImportTask(roundId, categories)
            if ('detail' in taskResponse) {
                throw new Error(taskResponse.detail)
            }
            setTaskID(taskResponse.data.taskId)
        } catch (e) {
            console.error(e)
        } finally {
            setImporting(false)
        }
    }
    return (taskID ? <StatusThingy taskId={taskID} onSuccess={afterImport} /> : <Suspense fallback={<LottieWrapper src="/lottie/importing.lottie" />}>
        <CategoryInput onSave={startImporting} alreadyIncludedCategories={[]} saving={importing} />
    </Suspense>)
}
export default ImportWidget