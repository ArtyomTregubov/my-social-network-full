import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../hooks/UseStore';
import { Modal } from './Modal';

export const ProfileModal = observer(() => {
  const [name, setName] = useState<string | undefined>(undefined);
  const [description, setDescription] = useState<string | undefined>(undefined);
  const { userStore } = useStore();
  const currentUser = userStore.currentUser;

  useEffect(() => {
    setName(currentUser?.userName);
    setDescription(currentUser?.userDescription);
  }, [userStore.isEditProfileModalOpen, currentUser?.userName, currentUser?.userDescription]);

  const handleEditProfileModalClose = () => {
    userStore.setIsEditProfileModalOpen(false);
  };

  const handleUpdateUser = (userId: string, userName: string, userDescription: string) => {
    userStore.updateUser(userId, userName, userDescription);
  };

  const handleUserDataSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (currentUser && name && description) {
      handleUpdateUser(currentUser.id, name, description);
      userStore.setIsEditProfileModalOpen(false);
    }
  };

  return (
    <Modal
      title={'Редактировать профиль'}
      topInputLabel={'Имя'}
      topInputType={'text'}
      topInputId={'nameInput'}
      bottomInputLabel={'Занятие'}
      bottomInputType={'text'}
      bottomInputId={'bioInput'}
      modalState={userStore.isEditProfileModalOpen}
      closeFunction={handleEditProfileModalClose}
      leftButton={'Сохранить'}
      rightButton={undefined}
      submitButton={true}
      submitFunction={handleUserDataSubmit}
      topInputValue={name}
      bottomInputValue={description}
      onTopInputChange={setName}
      onBottomInputChange={setDescription}
    />
  );
});
