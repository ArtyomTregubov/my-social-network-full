import { CardStore } from './CardStore';
import { UserStore } from './UserStore';

export class RootStore {
  userStore: UserStore;
  cardStore: CardStore;

  constructor() {
    this.userStore = new UserStore();
    this.cardStore = new CardStore();
  }
}
