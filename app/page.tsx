
import fetchSession from "@/server/session";
import { Button } from "@mui/material";
import Link from "next/link";
import { redirect } from "next/navigation";
import AddIcon from "@mui/icons-material/Add";

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
    </div>
  );
}
