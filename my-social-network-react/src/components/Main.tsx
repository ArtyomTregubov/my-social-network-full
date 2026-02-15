import type { FC } from "react";
import { GallerySection } from "./GallerySection"
import { ProfileSection } from "./ProfileSection"
import type { Card, User } from "./App";

type MainProps = {
    user: User | null;
    handleEditProfileModalOpen: () => void;
    handleEditAvatarModalOpen: () => void;
    handleQestionModalOpen: () => void;
    onCardClick: (card: Card) => void;
    gallaryCards: Card[]
}

export const Main: FC<MainProps> = ({  user, gallaryCards, handleEditProfileModalOpen, handleEditAvatarModalOpen, handleQestionModalOpen, onCardClick }) => {
    return (
        <main className="main-content">
            <ProfileSection
             user={user}
             handleEditProfileModalOpen={handleEditProfileModalOpen}
             handleEditAvatarModalOpen={handleEditAvatarModalOpen}
             />
            <GallerySection
                handleQestionModalOpen={handleQestionModalOpen}
                gallaryCards={gallaryCards}
                onCardClick={onCardClick}
             /> 
        </main>
    )
}