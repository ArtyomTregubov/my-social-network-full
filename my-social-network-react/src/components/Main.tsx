import type { FC } from 'react';
import type { Card } from '../utils/api.types';
import { GallerySection } from './GallerySection';
import { ProfileSection } from './ProfileSection';

type MainProps = {
  handleEditProfileModalOpen: () => void;
  handleEditAvatarModalOpen: () => void;
  handleQestionModalOpen: (card: Card) => void;
  onCardClick: (card: Card) => void;
  onCardLike: (card: Card) => void;
  gallaryCards: Card[];
};

export const Main: FC<MainProps> = ({
  gallaryCards,
  handleEditProfileModalOpen,
  handleEditAvatarModalOpen,
  handleQestionModalOpen,
  onCardClick,
  onCardLike,
}) => {
  return (
    <main className='main-content'>
      <ProfileSection
        handleEditProfileModalOpen={handleEditProfileModalOpen}
        handleEditAvatarModalOpen={handleEditAvatarModalOpen}
      />
      <GallerySection
        handleQestionModalOpen={handleQestionModalOpen}
        gallaryCards={gallaryCards}
        onCardClick={onCardClick}
        onCardLike={onCardLike}
      />
    </main>
  );
};
