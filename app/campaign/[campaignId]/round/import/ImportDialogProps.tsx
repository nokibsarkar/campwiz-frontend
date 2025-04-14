import { Task } from "@/app/task"
import type { Round } from "@/types/round"

export type ImportDialogProps = {
    round: Round,
    distribute: (t: Task) => void
    onClose: () => void
}