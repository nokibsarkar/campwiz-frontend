import fetchSession from "@/server/useSession";
import { Button } from "@mui/material";
import Link from "next/link";


export default async function Home() {
  const session = await fetchSession();
  console.log(session);
  return (
    <div>
      <Link href="/campaign">
        <Button variant="contained">Campaign</Button>
      </Link>
    </div>
  );
}
