import { CampaignCreate } from "@/types"
import { Button } from "@mui/material"

const CreateCampaign = () => {
    const createCampaign = async (campaign: CampaignCreate) => {
        try {
            const res = await fetch('/api/campaigns', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(campaign),
            })
            if (res.ok) {
                alert('Campaign created!')
            } else {
                alert('Failed to create campaign')
            }
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div>
            <h1>Create Campaign</h1>
            <Button
                onClick={() => {
                    createCampaign({
                        name: 'My Campaign',
                        description: 'A new campaign',
                        allowCreations: true,
                        allowExpansions: false,
                        allowJuryToParticipate: false,
                        allowMultipleJudgement: false,
                        allowedMediaTypes: [],
                        blacklist: "",
                        coordinators: [],
                        endDate: "",
                        image: "",
                        language: "",
                        maximumSubmissionOfSameArticle: 0,
                        minimumAddedBytes: 0,
                        minimumAddedWords: 0,
                        minimumDurationMilliseconds: 0,
                        minimumHeight: 0,
                        minimumResolution: 0,
                        minimumTotalBytes: 0,
                        minimumTotalWords: 0,
                        minimumWidth: 0,
                        organizers: [],
                        rules: "",
                        secretBallot: false,
                        startDate: ""
                    })
                }}
            >
                Create Campaign
            </Button>
        </div>
    )
}
export default CreateCampaign