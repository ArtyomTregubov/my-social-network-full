import { makeAutoObservable, runInAction } from 'mobx';
import { backend } from '../api/axiosInstance';
import type { Card } from '../types/card';

export class CardStore {
  cards: Card[] = [];
  cardToDelete: Card | null = null;
  selectedCard: Card | null = null;
  isAddCardModalOpen: boolean = false;
  isQestionDeleteCardModalOpen: boolean = false;
  isImageCardModalOpen: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  async fetchCards() {
    try {
      const response = await backend.get<Card[]>('/cards');
      runInAction(() => {
        this.cards = response.data;
      });
    } catch (error) {
      console.error('Ошибка при получении карточек:', error);
      throw error;
    }
  }

  async setCardLikes(cardId: string, likes: Array<{ id: string }>) {
    try {
      const response = await backend.patch<Card>(`/cards/${cardId}`, { likes });
      runInAction(() => {
        const updatedCard = response.data;
        this.cards = this.cards.map((card) => (card.id === cardId ? updatedCard : card));
      });
    } catch (error) {
      console.error('Ошибка при обновлении лайков карточки:', error);
      throw error;
    }
  }

  async createCard(card: Omit<Card, 'id'>) {
    try {
      const response = await backend.post<Card>('/cards', card);
      runInAction(() => {
        this.cards.push(response.data);
      });
    } catch (error) {
      console.error('Ошибка при создании карточки:', error);
      throw error;
    }
  }

  async deleteCard(cardId: string) {
    try {
      await backend.delete(`/cards/${cardId}`);
      runInAction(() => {
        this.cards = this.cards.filter((card) => card.id !== cardId);
      });
    } catch (error) {
      console.error('Ошибка при удалении карточки:', error);
      throw error;
    }
  }

  setAddCardModalOpen(isOpen: boolean) {
    this.isAddCardModalOpen = isOpen;
  }

  setQestionDeleteCardModalOpen(isOpen: boolean) {
    this.isQestionDeleteCardModalOpen = isOpen;
  }

  setCardToDelete(card: Card | null) {
    this.cardToDelete = card;
  }

  setSelectedCard(card: Card | null) {
    this.selectedCard = card;
  }

  setImageCardModalOpen(isOpen: boolean) {
    this.isImageCardModalOpen = isOpen;
  }

  handleCardClick = (card: Card) => {
    this.setSelectedCard(card);
    this.setImageCardModalOpen(true);
  };

  handleCardDelete = () => {
    if (!this.cardToDelete) {
      return;
    }
    this.deleteCard(this.cardToDelete.id);
    this.setQestionDeleteCardModalOpen(false);
  };

  handleQestionDeleteCardModalOpen = (card: Card) => {
    this.setCardToDelete(card);
    this.setQestionDeleteCardModalOpen(true);
  };
}
