import { dateFormater } from "@/types/_"
import { Role } from "@/types/role"
import { Round } from "@/types/round"
import { Box, Typography } from "@mui/material"
const RoundRole = ({ role }: { role: Role }) => (
    <Typography variant="body1" sx={{ mb: 2, }}>
        Role: {role.UserID}
    </Typography>
)
const RoundDetails = ({ round: c }: { round: Round }) => {
    return (
        <Box sx={{
            textAlign: 'left',
            mx: 'auto',
            display: 'inline-block',
            width: 'fit-content',
            p: 2,
            border: 1,
            borderColor: 'primary.main',
        }}>
            <Typography variant="body1" sx={{ mb: 2, }}>
                Name: {c.name}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, }}>
                Description: {c.description}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, }}>
                Start Date: {dateFormater.format(new Date(c.startDate))}
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, }}>
                End Date: {dateFormater.format(new Date(c.endDate))}
            </Typography>
            {
                c.roles?.map((role, i) => <RoundRole key={i} role={role} />)
            }
        </Box>
    )
}
export default RoundDetails