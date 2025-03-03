import type { CampaignCreate } from "@/types/campaign/create";
import { ActionDispatch } from "react";

const CampaignEditForm = ({ }: CampaignCreate & { dispatch: ActionDispatch<[Partial<CampaignCreate>]> }) => {
    return (
        <div>
            <h1>Campaign Edit Form</h1>
        </div>
    );
}
export default CampaignEditForm;
