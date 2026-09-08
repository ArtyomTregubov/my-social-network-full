import { makeAutoObservable, runInAction } from 'mobx';
import { backend } from '../api/axiosInstance';
import type { User } from '../types/user';

export class UserStore {
  currentUser: User | null = null;
  isEditProfileModalOpen: boolean = false;
  isEditAvatarModalOpen: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  async fetchUser(userId: string): Promise<void> {
    try {
      const response = await backend.get<User>(`/users/${userId}`);
      runInAction(() => {
        this.currentUser = response.data;
      });
    } catch (error) {
      console.error('Ошибка при получении пользователя:', error);
      throw error;
    }
  }

  async updateUser(userId: string, userName: string, userDescription: string): Promise<void> {
    try {
      const response = await backend.patch<User>(`/users/${userId}`, { userName, userDescription });
      runInAction(() => {
        this.currentUser = response.data;
      });
    } catch (error) {
      console.error('Ошибка при обновлении пользователя:', error);
      throw error;
    }
  }

  async updateAvatarUser(userId: string, userAvatar: string): Promise<void> {
    try {
      const response = await backend.patch<User>(`/users/${userId}`, { userAvatar });
      runInAction(() => {
        this.currentUser = response.data;
      });
    } catch (error) {
      console.error('Ошибка при обновлении аватара пользователя:', error);
      throw error;
    }
  }

  setIsEditProfileModalOpen(isOpen: boolean) {
    this.isEditProfileModalOpen = isOpen;
  }

  setIsEditAvatarModalOpen(isOpen: boolean) {
    this.isEditAvatarModalOpen = isOpen;
  }
}
