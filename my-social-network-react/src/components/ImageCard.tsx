import { type FC } from 'react';
import { useStore } from '../hooks/UseStore';
import type { Card } from '../types/card';

export type CardProps = {
  card: Card;
  handleQestionDeleteCardModalOpen: (card: Card) => void;
  onCardClick: (card: Card) => void;
};

export const ImageCard: FC<CardProps> = ({ card, handleQestionDeleteCardModalOpen, onCardClick }) => {
  const { userStore, cardStore } = useStore();
  const user = userStore.currentUser;
  const isOwn = card.owner.id === user?.id;
  const isLiked = card.likes.some((like) => {
    return like.id === user?.id;
  });
  const cardLikeButtonClassName = `${isLiked ? 'like-button-active' : 'like-button'}`;

  const handleClick = () => {
    onCardClick(card);
  };
  const handleCardLike = (card: Card) => {
    const currentUser = userStore.currentUser;

    if (!currentUser) {
      return;
    }

    const isLiked = card.likes.some((item) => {
      return item.id === currentUser.id;
    });
    const newLikes = isLiked
      ? card.likes.filter((like) => like.id !== currentUser.id)
      : [...card.likes, { id: currentUser.id }];

    cardStore.setCardLikes(card.id, newLikes);
  };

  return (
    <div className='gallery-item'>
      <img onClick={handleClick} src={card.image} />
      <div className='gallery-item-actions'>
        <button onClick={() => handleCardLike(card)} className={cardLikeButtonClassName}>
          <i className='fas fa-heart'></i>
        </button>
        <span className='gallery-card-description'>{card.description}</span>
        {isOwn && (
          <button onClick={() => handleQestionDeleteCardModalOpen(card)} className='delete-button'>
            <i className='fas fa-trash'></i>
          </button>
        )}
      </div>
    </div>
  );
};
