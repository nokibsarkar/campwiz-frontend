import { Round } from "@/types/round";
import { Button } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StopIcon from '@mui/icons-material/Stop';
import { Add } from "@mui/icons-material";
type RoundactionsProps = {
    round: Round
    isEditable?: boolean
    isDeletable?: boolean
    isStartable?: boolean
    isStoppable?: boolean
    isCreatable?: boolean
    onCreateClick: () => void
    onImportClick: () => void
}
const Roundactions = ({ isDeletable = false, isEditable = false, isStartable = false, isStoppable = false, isCreatable = false, onCreateClick }: RoundactionsProps) => {
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
        </div>
    );
}
export default Roundactions