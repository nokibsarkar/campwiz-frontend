"use client"
import { Round } from "@/types/round"
import ScoreOrBinaryVotingInterface from "../../evaluate/BinaryOrScoreVotingInterface"
import { Evaluation, Submission } from "@/types/submission"
type KichuEktaProps = {
    round: Round
    evaluation: Evaluation
    submission: Submission
}
const KichuEkta = ({ round, evaluation, submission }: KichuEktaProps) => {
    return (
        <ScoreOrBinaryVotingInterface
            assignmentCount={0}
            campaignId={round.campaignId}
            currentCursor={0}
            currentEvaluation={evaluation}
            isPublicJury={round.isPublicJury}
            error={null}
            evaluationCount={0}
            isLoading={false}
            nextImageWrapper={() => { }}
            saving={false}
            setCurrentCursor={() => { }}
            submission={submission}
            submit={() => Promise.resolve()}
            returnTo={`/round/${round.roundId}/submission/evaluated`}

        />
    )
}
export default KichuEkta