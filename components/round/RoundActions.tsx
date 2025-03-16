import { Round } from "@/types/round";
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import { Add } from "@mui/icons-material";
import Link from "next/link";
import JudgeIcon from "@mui/icons-material/HowToVote";
import { RoundStatus } from "@/types/round/status";
type RoundactionsProps = {
    round: Round
    isEditable?: boolean
    isDeletable?: boolean
    isStartable?: boolean
    isStoppable?: boolean
    isCreatable?: boolean
    isImportable?: boolean
    hasJudgePermission?: boolean
    onCreateClick: () => void
    onImportClick: () => void
    judgableLink: string
    isRedistributable?: boolean
    onRedistributeClick?: () => void
}
const Roundactions = ({ round, isDeletable = false,
    isEditable = false, isStartable = false,
    isStoppable = false, isCreatable = false, isImportable = false,
    onCreateClick, onImportClick, hasJudgePermission, judgableLink,
    isRedistributable = false, onRedistributeClick
}: RoundactionsProps) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
            {isEditable && <Button
                startIcon={<EditIcon />}
                variant="outlined"
                color="primary"
                sx={{ m: 1, px: 3 }}
            >
                Edit
            </Button>
            }
            {isDeletable && <Button
                startIcon={<DeleteIcon />}
                variant="outlined"
                color="secondary"
                sx={{ m: 1, px: 3 }}
            >
                Delete
            </Button>
            }
            {isStartable && <Button
                startIcon={<PlayArrowIcon />}
                variant="contained"
                color="success"
                sx={{ m: 1, px: 3 }}
            >
                Start
            </Button>
            }
            {isStoppable && <Button
                startIcon={<StopIcon />}
                variant="contained"
                color="error"
                sx={{ m: 1, px: 3 }}
            >
                Stop
            </Button>
            }
            {
                isCreatable && <Button
                    startIcon={<Add />}
                    variant="contained"
                    color="primary"
                    sx={{ m: 1, px: 3 }}
                    onClick={onCreateClick}
                >
                    Create
                </Button>
            }
            {
                isImportable && <Button
                    startIcon={<Add />}
                    variant="contained"
                    color="primary"
                    sx={{ m: 1, px: 3 }}
                    onClick={onImportClick}
                >
                    Import
                </Button>
            }
            {
                hasJudgePermission && round.status == RoundStatus.ACTIVE && <Link href={judgableLink}>
                    <Button
                        startIcon={<JudgeIcon />}
                        variant="contained"
                        color="primary"
                        sx={{ m: 1, px: 3 }}
                        href={judgableLink}
                    >
                        Start Evaluation
                    </Button>
                </Link>
            }
            {
                isRedistributable && <Button
                    startIcon={<Add />}
                    variant="contained"
                    color="primary"
                    sx={{ m: 1, px: 3 }}
                    onClick={onRedistributeClick}
                >
                    Redistribute Assignments
                </Button>
            }
        </div>
    );
}
export default Roundactions