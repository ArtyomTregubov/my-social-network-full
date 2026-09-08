import { useState } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../hooks/UseStore';
import { Modal } from './Modal';

export const PlaceModal = observer(() => {
  const { cardStore } = useStore();
  const [placeDescription, setPlaceDescription] = useState<string>('');
  const [placeLink, setPlaceLink] = useState<string>('');

  const handleEditPlaceModalClose = () => {
    cardStore.setAddCardModalOpen(false);
    setPlaceDescription('');
    setPlaceLink('');
  };

  const handlePlaceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (placeDescription && placeLink) {
      cardStore.createCard({
        image: placeLink,
        description: placeDescription,
        owner: { id: '1' },
        likes: []
      });
    }

    handleEditPlaceModalClose();
  };

  return (
    <Modal
      title={'Добавить место'}
      topInputLabel={'Описание'}
      topInputType={'text'}
      topInputId={'placeInput'}
      bottomInputLabel={'Ссылка'}
      bottomInputType={'url'}
      bottomInputId={'urlInput'}
      modalState={cardStore.isAddCardModalOpen}
      closeFunction={handleEditPlaceModalClose}
      leftButton={'Сохранить'}
      rightButton={undefined}
      submitButton={true}
      onTopInputChange={setPlaceDescription}
      onBottomInputChange={setPlaceLink}
      submitFunction={handlePlaceSubmit}
      topInputValue={placeDescription}
      bottomInputValue={placeLink}
    />
  );
});
