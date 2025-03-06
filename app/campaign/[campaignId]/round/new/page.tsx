import CreateRound from "./actualPage";
const CreateNewRoundWrapper = async ({ params }: { params: Promise<{ campaignId: string }> }) => {
    const { campaignId } = await params;
    return (
        <CreateRound campaignId={campaignId} />
    )
}
export default CreateNewRoundWrapper;