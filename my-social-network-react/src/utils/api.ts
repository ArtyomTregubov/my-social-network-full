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

    public getCards(): Promise<Card[]> {
        return fetch (`${this._baseUrl}/cards`, {
            headers: this._headers
        }).then(res => this._checkResponse<Card[]>(res));
    }

    public addLike(cardId: number): Promise<Card> {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'PUT',
            headers: this._headers   
        }).then(res => this._checkResponse<Card>(res));
    }
    
    public deleteLike(cardId: number): Promise<Card> {
        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: 'DELETE',
            headers: this._headers   
        }).then(res => this._checkResponse<Card>(res))
    }
    
    public changeLikeCardStatus(cardId: string, isLiked: boolean): Promise<Card> {
        const method = isLiked ? 'PUT' : 'DELETE';

        return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
            method: method,
            headers: this._headers   
        }).then(res => this._checkResponse<Card>(res))
    }
}

const api = new Api({
    baseUrl: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api;