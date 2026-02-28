import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { ProfileModal } from "./ProfileModal";
import { useEffect, useState } from "react";
import { PlaceModal } from "./PlaceModal";
import { AvatarModal } from "./AvatarModal";
import { QestionModal } from "./QestionModal";
import { ImageModal } from "./ImageModal";
import { CurrentUserContext } from "../contexts/CurrenrtUserContext";
import type { Card, User } from "../utils/api.types";
import api from "../utils/api";

function App() {
    const [initialCards, setInitialCards] = useState<Card[]>([]);
    const [cardToDelete, setCardToDelete] = useState<Card | null>(null);
    const [isSelectedCard, setSelectedCard] = useState<Card | null>(null);
    const [isImageModalOpen, setImageModalOpen] = useState<boolean>(false);
    const [isEditProfileModalOpen, setEditProfileModalOpen] = useState<boolean>(false);
    const [isEditPlaceModalOpen, setEditPlaceModalOpen] = useState<boolean>(false);
    const [isEditAvatarModalOpen, setEditAvatarModalOpen] = useState<boolean>(false);
    const [isQestionModalOpen, setQestionModalOpen] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        api.getUsers(1)
        .then(user => setUser({...user, id: Number(user.id)}))
        .catch(error => console.error('Ошибка загрузки:', error));
    }, []);

    useEffect(() => {
        api.getCards()
        .then(cards => setInitialCards(cards))
        .catch(error => console.error('Ошибка загрузки:', error));
    }, [])

    const gallaryCards = [...initialCards]

    const handleEditProfileModalOpen = () => {
        setEditProfileModalOpen(true);
    }

    const handleEditAvatarModalOpen = () => {
        setEditAvatarModalOpen(true);
    }

    const handleEditPlaceModalOpen = () => {
        setEditPlaceModalOpen(true);
    }

    const handleQestionModalOpen = (card: Card) => {
        setCardToDelete(card)
        setQestionModalOpen(true);
    }

    const handleCardClick = (card: Card) => {
        setSelectedCard(card);
        setImageModalOpen(true);
    }

    const handleCardLike = (card: Card) => {
        if (!user) {
            return
        }
        const isLiked = card.likes.some((item) => {
            return item.id === user.id
        });
        const newLikes = isLiked 
        ? card.likes.filter((like) => like.id !== user.id)
        : [...card.likes, { id: user.id }];

        api.setCardLikes(card.id, newLikes)
        .then((updatedCard) => {
            setInitialCards((currentCards) => currentCards.map((currentCard) => currentCard.id === card.id ? updatedCard : currentCard));
        })
        .catch(error => console.error('Ошибка лайка:', error));
    }

    const handleCardDelete = (card: Card) => {
        api.deleteCard(card.id)
        .then(() => {
            setInitialCards((currentCards) => currentCards.filter((currentCard) => currentCard.id !== card.id));
        })
        .catch(error => console.error('Ошибка удаления:', error));
    }

    const handleUpdateUser = (userId: number, userName: string, userDescription: string) => {
        api.updateUser(userId, userName, userDescription)
        .then((updatedUser) => {
            setUser(updatedUser);
        })
        .catch(error => console.error('Ошибка обновления пользователя:', error));
    }

    const handleUpdateAvatarUser = (userId: number, userAvatar: string) => {
        api.updateAvatarUser(userId, userAvatar)
        .then((updatedUser) => {
            setUser(updatedUser);
        })
        .catch(error => console.error('Ошибка обновления аватара:', error));
    }

  return (
    <CurrentUserContext.Provider value={user}>
        <Header
        handleEditPlaceModalOpen={handleEditPlaceModalOpen}
        />
        <Main
        handleQestionModalOpen={handleQestionModalOpen}
        gallaryCards={gallaryCards}
        handleEditProfileModalOpen={handleEditProfileModalOpen}
        handleEditAvatarModalOpen={handleEditAvatarModalOpen}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        />
        <Footer />
        <ProfileModal
        isEditProfileModalOpen={isEditProfileModalOpen}
        setEditProfileModalOpen={setEditProfileModalOpen}
        onUpdateUser={handleUpdateUser}
        />
        <PlaceModal
        isEditPlaceModalOpen={isEditPlaceModalOpen}
        setEditPlaceModalOpen={setEditPlaceModalOpen}
        />
        <AvatarModal
        isEditAvatarModalOpen={isEditAvatarModalOpen}
        setEditAvatarModalOpen={setEditAvatarModalOpen}
        onUpdateAvatarUser={handleUpdateAvatarUser}
        />
        <QestionModal
        isQestionModalOpen={isQestionModalOpen}
        setQestionModalOpen={setQestionModalOpen}
        onCardDelete={handleCardDelete}
        card={cardToDelete}
        />
        <ImageModal
        card={isSelectedCard}
        isImageModalOpen={isImageModalOpen}
        setImageModalOpen={setImageModalOpen}
        />
    </CurrentUserContext.Provider>
  )
}

export default App
