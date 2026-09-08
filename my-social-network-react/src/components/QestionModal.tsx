import { observer } from 'mobx-react';
import { useStore } from '../hooks/UseStore';
import { Modal } from './Modal';

export const QestionModal = observer(() => {
  const { cardStore } = useStore();

  return (
    <Modal
      title={'Вы уверены?'}
      topInputLabel={'disabled'}
      topInputType={'disabled'}
      topInputId={undefined}
      bottomInputLabel={'disabled'}
      bottomInputType={'disabled'}
      bottomInputId={undefined}
      modalState={cardStore.isQestionModalOpen}
      closeFunction={() => cardStore.setQestionModalOpen(false)}
      leftButton={'Да'}
      rightButton={'Нет'}
      actionFunction={cardStore.handleCardDelete}
      typeOfModal={'button'}
    />
  );
});
