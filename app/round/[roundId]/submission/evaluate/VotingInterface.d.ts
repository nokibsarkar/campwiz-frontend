export type VotingInterfaceProps = {
    goNext: () => void;
    goPrevious: () => void;
    submitScore: (score: number) => void;
    score: number | null;
}