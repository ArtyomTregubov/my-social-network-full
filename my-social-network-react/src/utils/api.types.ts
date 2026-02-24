export interface User {
    id: number;
    userName: string;
    userDescription: string;
    userAvatar: string;
} 

export type Card = {
    id: number;
    image: string;
    description: string;
    owner: { id: number };
    likes:  Array<{id: number}>;
}

export interface ApiConfig {
    baseUrl: string;
    headers: Record<string, string>;
}