import { observer } from 'mobx-react';
import { useStore } from '../hooks/UseStore';
import { ImageCard } from './ImageCard';

export const GallerySection = observer(() => {
  const { cardStore } = useStore();

  return (
    <section className='gallery-section'>
      <h3 className='gallery-title'>Мои фотографии</h3>
      <div className='gallery-grid'>
        {cardStore.cards.map((card) => (
          <ImageCard
            onCardClick={() => cardStore.handleCardClick(card)}
            handleQestionDeleteCardModalOpen={() => cardStore.handleQestionDeleteCardModalOpen(card)}
            card={card}
            key={card.id}
          />
        ))}
      </div>
    </section>
  );
});
