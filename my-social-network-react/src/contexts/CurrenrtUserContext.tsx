import { createContext } from "react";
import type { User } from "../components/App";

export const CurrentUserContext = createContext<User | null>(null);