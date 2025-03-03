import { Session } from "@/types/user/session";
import { createContext } from "react";

type SessionContextType = Session | null;
const SessionContext = createContext<SessionContextType>(null);
export default SessionContext;