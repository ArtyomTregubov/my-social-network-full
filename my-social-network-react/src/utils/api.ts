import type { ApiConfig, Card, User } from "./api.types";

class Api {
    private _baseUrl: string;
    private _headers: Record<string, string>

    constructor({baseUrl, headers}: ApiConfig) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    private _checkResponse<T>(res: Response): Promise<T> {
        if (res.ok) {
            return res.json() as Promise<T>;
        }
        return Promise.reject(`Error: ${res.status}`);
    }

    public getUsers(userId: number): Promise<User> {
        return fetch (`${this._baseUrl}/users/${userId}`, {
            headers: this._headers
        }).then(res => this._checkResponse<User>(res));
    }

    public updateUser(userId: number, userName: string, userDescription: string): Promise<User> {
        return fetch(`${this._baseUrl}/users/${userId}`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ userName, userDescription })
        }).then(res => this._checkResponse<User>(res));
    }

    public updateAvatarUser(userId: number, userAvatar: string): Promise<User> {
        return fetch(`${this._baseUrl}/users/${userId}`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ userAvatar })
        }).then(res => this._checkResponse<User>(res));
    }

    public getCards(): Promise<Card[]> {
        return fetch (`${this._baseUrl}/cards`, {
            headers: this._headers
        }).then(res => this._checkResponse<Card[]>(res));
    }

    public setCardLikes(cardId: number, likes: Array<{ id: number }>): Promise<Card> {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ likes })
        }).then(res => this._checkResponse<Card>(res));
    }

    public deleteCard(cardId: number): Promise<void> {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'PATCH',
            headers: this._headers
        }).then(res => this._checkResponse<void>(res));
    }
}

const api = new Api({
    baseUrl: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api;