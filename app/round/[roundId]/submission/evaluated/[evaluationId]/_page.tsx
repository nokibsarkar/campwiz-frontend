"use client"
import { EvaluationType, Round } from "@/types/round"
import ScoreOrBinaryVotingInterface from "../../evaluate/BinaryOrScoreVotingInterface"
import { Evaluation, EvaluationListResponseWithCurrentStats, Submission } from "@/types/submission"
import { useState } from "react"
import submitVote from "../../evaluate/submitVote"
import TickIcon from "@mui/icons-material/CheckCircle"
import Link from "next/link"
import { Button } from "@mui/material"
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackward from '@mui/icons-material/ArrowBack';
type KichuEktaProps = {
    round: Round
    evaluation: Evaluation
    submission: Submission
}
const SavingSuccess = ({ returnTo, close }: { returnTo: string, close: () => void }) => {
    return <div className="flex flex-col items-center justify-center h-screen">
        <TickIcon className="text-green-500" fontSize="large" />
        <div className="text-lg mt-4">Your vote has been saved successfully.</div>
        <Link href={returnTo} className="mt-4 text-blue-500 hover:underline">
            <Button variant="contained" color="primary" startIcon={<ArrowBackward />}
                sx={{
                    borderRadius: 3,
                    m: 1
                }}
            >Go to the List</Button>
        </Link>
        <Button variant="outlined" color="secondary" startIcon={<EditIcon />}
            sx={{
                borderRadius: 3,
                m: 1
            }}
            onClick={close}
        >Modify Again</Button>
    </div>
}
const KichuEkta = ({ round, evaluation, submission }: KichuEktaProps) => {
    const [imageLoaded, setImageLoaded] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [saving, setSaving] = useState(false);
    const [assignmentCount, setAssignmentCount] = useState(0);
    const [evaluationCount, setEvaluationCount] = useState(0);
    const [showProgress, setShowProgress] = useState(false);
    const [showResponse, setShowResponse] = useState(false);

    const submit = async (score: number) => {
        console.log('submit', score);
        try {
            if (saving) return;
            if (!imageLoaded) return;
            setSaving(true);
            const response = await submitVote(
                round.roundId,
                round.isPublicJury,
                [
                    { evaluationId: evaluation.evaluationId, score, comment: null, submissionId: evaluation.submissionId }
                ]
            );
            if (!response) {
                setError("Something went wrong");
                return;
            }
            if ('detail' in response) {
                setError(response.detail);
                return
            }
            const r = response as EvaluationListResponseWithCurrentStats;
            setAssignmentCount(r.totalAssignmentCount);
            setEvaluationCount(r.totalEvaluatedCount);
            setShowProgress(true);
            setImageLoaded(true);
        } catch (error) {
            setError((error as Error).message);
            return
        } finally {
            setSaving(false);
            setShowResponse(true);
        }
    }
    if (![EvaluationType.BINARY, EvaluationType.SCORE].includes(round.type)) {
        return <p>
            Sorry, Only Yes/No and Score voting is available for now.

        </p>
    }
    return !saving && showResponse ? (
        <SavingSuccess returnTo={`/round/${round.roundId}/submission/evaluated`} close={() => { setShowResponse(false); setShowProgress(false); setImageLoaded(true); }} />
    ) : (
        <ScoreOrBinaryVotingInterface
            assignmentCount={assignmentCount}
            campaignId={round.campaignId}
            currentCursor={0}
            currentEvaluation={evaluation}
            isPublicJury={round.isPublicJury}
            error={error}
            evaluationCount={evaluationCount}
            isLoading={false}
            nextImageWrapper={() => { setImageLoaded(true) }}
            saving={saving}
            setCurrentCursor={() => { }}
            submission={submission}
            submit={submit}
            returnTo={`/round/${round.roundId}/submission/evaluated`}
            hasNext={false}
            showProgress={showProgress}
            noHeader
        />
    )
}
export default KichuEkta