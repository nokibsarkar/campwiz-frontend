const ModifyEvaluationPage = async ({
    params,
}: {
    params: Promise<{ roundId: string; evaluationId: string }>;
}) => {
    const { roundId, evaluationId } = await params;
    return (
        <div className="flex flex-col gap-2">
            <h1 className="text-3xl font-bold">Evaluation</h1>
            <p>Evaluation ID: {evaluationId}</p>
            <p>Round ID: {roundId}</p>
        </div>
    );
}
export default ModifyEvaluationPage;