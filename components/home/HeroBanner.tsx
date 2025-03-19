import Logo from "@/components/Logo"
import { Button, Typography } from "@mui/material"

const HeroBanner = () => (
    <div className='text-center pb-4 mb-4 h-max'>
        <Logo />
        <Typography
            variant="h4"
            fontWeight="bold"
            sx={{
                fontFamily: "Lora, serif",
                color: "#006699", // Blue color for the text
            }}
        >
            Welcome to Campwiz NXT
        </Typography>
        <Typography variant="subtitle1" color="gray" sx={{ fontFamily: "Lora, serif" }}>
            Taking jury experience to another level
        </Typography>
        {/* Updated Outlined Button with Blue Border and Text */}
        <Button
            variant="outlined"
            sx={{
                mt: 2,
                borderColor: "#006699", // Blue border color
                color: "#006699", // Blue text color
                borderRadius: 30,
                transition: "0.3s",
                "&:hover": {
                    bgcolor: "#006699", // Blue background on hover
                    color: "#fff", // White text on hover
                    transform: "scale(1.05)",
                },
            }}
        >
            Read Documentation
        </Button>
    </div>
)
export default HeroBanner