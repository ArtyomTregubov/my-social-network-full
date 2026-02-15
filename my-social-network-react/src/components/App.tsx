import { Footer } from "./Footer"
import { Header } from "./Header"
import { Main } from "./Main"
import { ProfileModal } from "./ProfileModal"
import { useEffect, useState } from "react"
import { PlaceModal } from "./PlaceModal"
import { AvatarModal } from "./AvatarModal"
import { QestionModal } from "./QestionModal"
import { ImageModal } from "./ImageModal"

export interface User {
    id: number;
    userName: string;
    userDescription: string;
    userAvatar: string;
} 

export type Card = {
    id: string;
    image: string;
    description: string;
}

function App() {

    const [initialCards, setInitialCards] = useState<Card[]>([]);
    const [isSelectedCard, setSelectedCard] = useState<Card | null>(null);
    const [isImageModalOpen, setImageModalOpen] = useState<boolean>(false);
    const [isEditProfileModalOpen, setEditProfileModalOpen] = useState<boolean>(false);
    const [isEditPlaceModalOpen, setEditPlaceModalOpen] = useState<boolean>(false);
    const [isEditAvatarModalOpen, setEditAvatarModalOpen] = useState<boolean>(false);
    const [isQestionModalOpen, setQestionModalOpen] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try { 
                const response = await fetch('http://localhost:3000/users/1');
    
                    if(!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
    
                const data: User = await response.json();
                setUser(data);
            
            } catch (error) {
                console.error('Ошибка загрузки:', error);
            } finally {
                console.log('final');
            }
        }
    
        fetchUser();
    }, []);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch('http://localhost:3000/cards')

                if(!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data: Card[] = await response.json();
                setInitialCards(data);

            } catch (error) {
                console.error('Ошибка загрузки:', error);
            } finally {
                console.log('final');
            }
        }

        fetchCards();
    }, []);

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

    const handleQestionModalOpen = () => {
        setQestionModalOpen(true);
    }

    const handleCardClick = (card: Card) => {
        setSelectedCard(card);
        setImageModalOpen(true);
    }

  return (
    <>
    <Header
     handleEditPlaceModalOpen={handleEditPlaceModalOpen}
     />
    <Main
     user={user}
     handleQestionModalOpen={handleQestionModalOpen}
     gallaryCards={gallaryCards}
     handleEditProfileModalOpen={handleEditProfileModalOpen}
     handleEditAvatarModalOpen={handleEditAvatarModalOpen}
     onCardClick={handleCardClick}
     />
    <Footer />
    <ProfileModal
     isEditProfileModalOpen={isEditProfileModalOpen}
     setEditProfileModalOpen={setEditProfileModalOpen}
    />
     <PlaceModal
     isEditPlaceModalOpen={isEditPlaceModalOpen}
     setEditPlaceModalOpen={setEditPlaceModalOpen}
    />
    <AvatarModal
     isEditAvatarModalOpen={isEditAvatarModalOpen}
     setEditAvatarModalOpen={setEditAvatarModalOpen}
    />
    <QestionModal
     isQestionModalOpen={isQestionModalOpen}
     setQestionModalOpen={setQestionModalOpen}
    />
     <ImageModal
      card={isSelectedCard}
      isImageModalOpen={isImageModalOpen}
      setImageModalOpen={setImageModalOpen}
      />
    </>
  )
}

export default App
