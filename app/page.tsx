
import fetchSession from "@/server/session";
import { Button } from "@mui/material";
import Link from "next/link";
import { redirect } from "next/navigation";
import AddIcon from "@mui/icons-material/Add";
import PublicRunningCampaigns from "@/components/campaign/PublicCampaigns";

export default async function Home() {
  const session = await fetchSession();
  if (session === null) {
    return redirect('/user/login');
  }
  return (
    <div>
      <Link href="/campaign/new">
        <Button variant="contained" startIcon={<AddIcon />} color='success'>New Campaign</Button>
      </Link>
      <PublicRunningCampaigns limit={10} />
    </div>
  );
}
