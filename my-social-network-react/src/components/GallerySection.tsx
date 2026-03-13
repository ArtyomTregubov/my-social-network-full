import type { FC } from 'react';
import type { Card } from '../utils/api.types';
import { ImageCard } from './ImageCard';

type GallerySectionMainProps = {
  handleQestionModalOpen: (card: Card) => void;
  gallaryCards: Card[];
  onCardClick: (card: Card) => void;
  onCardLike: (card: Card) => void;
};

export const GallerySection: FC<GallerySectionMainProps> = ({
  gallaryCards,
  handleQestionModalOpen,
  onCardClick,
  onCardLike,
}) => {
  return (
    <section className='gallery-section'>
      <h3 className='gallery-title'>Мои фотографии</h3>
      <div className='gallery-grid'>
        {gallaryCards.map((card) => (
          <ImageCard
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            handleQestionModalOpen={() => handleQestionModalOpen(card)}
            card={card}
            key={card.id}
          />
        ))}
      </div>
    </section>
  );
};
