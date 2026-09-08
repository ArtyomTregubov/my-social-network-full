import { useRef } from 'react';
import { observer } from 'mobx-react';
import { useStore } from '../hooks/UseStore';

export const AvatarModal = observer(() => {
  const { userStore } = useStore();
  const avatarRef = useRef<HTMLInputElement>(null);

  const handleUpdateAvatarUser = (userId: string, userAvatar: string) => {
    userStore.updateAvatarUser(userId, userAvatar);
  };

  const handleUserAvatarSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userStore.currentUser && avatarRef.current) {
      const avatar = avatarRef.current.value;

      if (avatar) {
        handleUpdateAvatarUser(userStore.currentUser.id, avatar);
        userStore.setIsEditAvatarModalOpen(false);
      }
    }
  };

  return (
    <div className={userStore.isEditAvatarModalOpen ? 'modal-open' : 'modal'}>
      <div className='modal-content'>
        <span onClick={() => userStore.setIsEditAvatarModalOpen(false)} className='close-button' id='closeModalBtn'>
          &times;
        </span>
        <h2 className='modal-title'>Сменить аватар?</h2>
        <form className='modal-form' id='profileForm' onSubmit={handleUserAvatarSubmit} noValidate>
          <div className='form-group'>
            <label htmlFor='avatarInput'>Ссылка</label>
            <input type='url' id='avatarInput' ref={avatarRef} className='form-input' required />
          </div>
          <div className='modal-buttons'>
            <button type='submit' className='modal-button'>
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
});
