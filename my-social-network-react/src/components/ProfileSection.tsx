import type { FC } from "react";
import type { User } from "./App";

type ProfileSectionProps = {
    handleEditProfileModalOpen: () => void;
    handleEditAvatarModalOpen: () => void;
    user: User | null
}

export const ProfileSection: FC<ProfileSectionProps> = ({ user, handleEditProfileModalOpen, handleEditAvatarModalOpen}) => {
    return (
            <section className="profile-section">
                <div className="profile-picture-container">
                    <img onClick={handleEditAvatarModalOpen} src={user?.userAvatar} alt="Profile" className="profile-picture" />
                </div>
                <div className="profile-info">
                    <h2 className="profile-name" id="profileName">{user?.userName}</h2>
                    <p className="profile-bio" id="profileBio">{user?.userDescription}</p>
                    <button onClick={handleEditProfileModalOpen} className="edit-button" id="editProfileBtn">Редактировать профиль</button>
                </div>
            </section>
    )
}