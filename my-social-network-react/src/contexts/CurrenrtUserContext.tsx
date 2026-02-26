import { createContext } from "react";
import type { User } from "../utils/api.types";


export const CurrentUserContext = createContext<User | null>(null);