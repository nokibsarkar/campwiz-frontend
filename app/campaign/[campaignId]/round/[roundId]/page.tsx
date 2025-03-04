const ViewRound = async ({ params }: { params: Promise<{ campaignId: string, roundId: string }> }) => {
    const { campaignId, roundId } = await params;
    return (
        <div>
            <h1>View Round</h1>
            <p>Campaign ID: {campaignId}</p>
            <p>Round ID: {roundId}</p>
        </div>
    )
};
export default ViewRound;