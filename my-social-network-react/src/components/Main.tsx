import type { FC } from "react";
import { GallerySection } from "./GallerySection"
import { ProfileSection } from "./ProfileSection"
import type { Card } from "./App";

type MainProps = {
    handleEditProfileModalOpen: () => void;
    handleEditAvatarModalOpen: () => void;
    handleQestionModalOpen: () => void;
    onCardClick: (card: Card) => void;
    gallaryCards: Card[]
}

export const Main: FC<MainProps> = ({ gallaryCards, handleEditProfileModalOpen, handleEditAvatarModalOpen, handleQestionModalOpen, onCardClick }) => {
    return (
        <main className="main-content">
            <ProfileSection
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