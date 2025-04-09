import { Evaluation } from "@/types/submission";

export type VotingInterfaceProps = {
    goNext: () => void;
    goPrevious: () => void;
    submitScore: (score: number) => void;
    evaluation: Evaluation;
    saving: boolean;
    noPrevious?: boolean;
    noNext?: boolean;
    evaluationCount: number
    assignmnetCount: number
    showProgress?: boolean
}