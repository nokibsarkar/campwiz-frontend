import { Campaign } from "@/types";
import { Button } from "@mui/material";
import Link from "next/link";


export default function Home() {
  const campaign: Campaign = {
    campaignId: "string",
    createdAt: "string",
    createdById: "string",
    description: "string",
    endDate: "string",
    image: "string",
    language: "",
    name: "",
    roles: null,
    rules: "",
    startDate: ""
  }
  console.log(campaign);
  return (
    <div>
      <Link href="/campaign">
        <Button variant="contained">Campaign</Button>
      </Link>
    </div>
  );
}
