import Logo from "@/components/Logo"
import { Button } from "@mui/material"
import Link from "next/link"

const AllSet = ({ campaignId }: { roundId: string, campaignId: string }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full w-full">
            <Logo />
            <div className="text-center">
                <h1 className="text-2xl font-bold">All Set</h1>
                <p className="text-lg">Seems like, You have no pending submissions to evaluate in this round.</p>
                <div className="flex-row flex justify-center">
                    <Link href={`/campaign/${campaignId}`}>
                        <Button variant="contained" color="primary" sx={{ m: 1 }}>
                            Go to Round
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default AllSet