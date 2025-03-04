import { IDType } from "../_";
export type RoleType = "Admin" | "Evaluator" | "Participant";
export type Role = {
    RoleID: IDType;
    Type: RoleType;
    UserID: IDType;
    CampaignID: IDType;
    RoundID?: IDType;
    IsAllowed: boolean;
    TotalAssigned: number;
    TotalEvaluated: number;
    TotalScore: number;
};