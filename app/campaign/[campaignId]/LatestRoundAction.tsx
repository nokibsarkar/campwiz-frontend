
import StopIcon from '@mui/icons-material/Pause';
import Start from '@mui/icons-material/PlayArrow';
import DoubleTickIcon from '@mui/icons-material/DoneAll';
import Link from "next/link";
import EditIcon from '@mui/icons-material/Edit';
import JudgeIcon from '@mui/icons-material/HowToVote';
import { RoundStatus } from "@/types/round/status";
import { Button, } from "@mui/material";
import { Add } from "@mui/icons-material";
import React from 'react';
import { Round } from '@/types/round';
import { Campaign } from '@/types';
import SelectedRoundActionStatus from './SelectedActionStatus';
import ExportToCSVButton from './ExportButton';
import ChangeStatusButton from './ChangeStatusButton';
const CreateRoundButton = ({ onClick }: { onClick: () => void }) => (
    <Button
        startIcon={<Add />}
        variant="contained"
        color="primary"
        onClick={onClick}
        sx={{ m: 1, px: 3 }}
    >
        Create Round
    </Button>
)
const EditRoundButton = ({ onClick }: { onClick: () => void }) => (
    <Button
        startIcon={<EditIcon />}
        variant="contained"
        color="primary"
        onClick={onClick}
        sx={{ m: 1, px: 3 }}
    >
        Edit Round
    </Button>
)




const LatestRoundActions = ({ latestRound, campaign, setAction, isJury, judgableLink, refresh, isCoordinator }: { latestRound: Round | null, campaign: Campaign, action: SelectedRoundActionStatus, setAction: (action: SelectedRoundActionStatus) => void, isJury: boolean, judgableLink: string, refresh: () => void, isCoordinator: boolean }) => {
    // if no round is avaliable, return a create round button
    const buttons: React.ReactNode[] = []
    if (campaign.status !== RoundStatus.ACTIVE)
        return null
    if (isJury && latestRound && latestRound.status === RoundStatus.ACTIVE) {
        buttons.push(<Link href={judgableLink}>
            <Button
                startIcon={<JudgeIcon />}
                variant="contained"
                color="primary"
                sx={{ m: 1, px: 3 }}
            >
                Start Evaluation
            </Button>
        </Link>)
    }
    if (isCoordinator) {
        if (!latestRound) {
            buttons.push(<CreateRoundButton onClick={() => setAction(SelectedRoundActionStatus.creating)} />)
        } else {
            if (latestRound.status === RoundStatus.COMPLETED) {
                if (isCoordinator) {
                    buttons.push(<ExportToCSVButton roundId={latestRound.roundId} />);
                }
                buttons.push(<CreateRoundButton onClick={() => setAction(SelectedRoundActionStatus.creating)} />);
            } else if (latestRound.status === RoundStatus.ACTIVE) {
                buttons.push(<ChangeStatusButton
                    roundId={latestRound.roundId}
                    color="error"
                    description=""
                    icon={<StopIcon />}
                    label="Pause"
                    status={RoundStatus.PAUSED}
                    onClick={() => setAction(SelectedRoundActionStatus.finalizing)}
                    refresh={refresh}
                />);


            } else if (latestRound.status === RoundStatus.PAUSED) {
                if (latestRound.totalSubmissions == 0) {
                    buttons.push(
                        <Button
                            startIcon={<StopIcon />}
                            variant="contained"
                            color="primary"
                            onClick={() => setAction(SelectedRoundActionStatus.importing)}
                            sx={{ m: 1, px: 3 }}
                        >
                            Import
                        </Button>
                    );
                }
                buttons.push(<EditRoundButton onClick={() => setAction(SelectedRoundActionStatus.editing)} />);
                buttons.push(<ChangeStatusButton
                    roundId={latestRound.roundId}
                    color="success" description=""
                    icon={<DoubleTickIcon />}
                    label="Mark as complete"
                    status={RoundStatus.COMPLETED}
                    onClick={() => setAction(SelectedRoundActionStatus.finalizing)}
                    refresh={refresh}
                />);
                buttons.push(<ChangeStatusButton
                    roundId={latestRound.roundId}
                    color="error"
                    description=""
                    icon={<Start />}
                    label="Start"
                    status={RoundStatus.ACTIVE}
                    onClick={() => setAction(SelectedRoundActionStatus.finalizing)}
                    refresh={refresh}
                />);
            }
        }
    }

    return (
        <div style={{ textAlign: 'right' }}>
            {buttons.map((button, i) => (
                <React.Fragment key={i}>
                    {button}
                </React.Fragment>
            ))}
        </div>
    )
}
export default LatestRoundActions