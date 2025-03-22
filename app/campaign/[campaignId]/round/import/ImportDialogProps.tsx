import { Round } from "@/types/round"

export type ImportDialogProps = {
    round: Round,
    afterImport: () => void
    onClose: () => void
}