import { observer } from 'mobx-react';
import { useStore } from '../hooks/UseStore';

export const ProfileSection = observer(() => {
  const { userStore } = useStore();
  const user = userStore.currentUser;

  return (
    <section className='profile-section'>
      <div className='profile-picture-container'>
        <img
          onClick={() => userStore.setIsEditAvatarModalOpen(true)}
          src={user?.userAvatar}
          alt='Profile'
          className='profile-picture'
        />
      </div>
      <div className='profile-info'>
        <h2 className='profile-name' id='profileName'>
          {user?.userName}
        </h2>
        <p className='profile-bio' id='profileBio'>
          {user?.userDescription}
        </p>
        <button onClick={() => userStore.setIsEditProfileModalOpen(true)} className='edit-button' id='editProfileBtn'>
          Редактировать профиль
        </button>
      </div>
    </section>
  );
});
