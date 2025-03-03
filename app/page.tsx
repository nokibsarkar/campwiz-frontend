
import fetchSession from "@/server/session";
import { Button } from "@mui/material";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await fetchSession();
  if (session === null) {
    return redirect('/user/login');
  }
  return (
    <div>
      <Link href="/campaign">
        <Button variant="contained">Campaign</Button>
      </Link>
    </div>
  );
}
