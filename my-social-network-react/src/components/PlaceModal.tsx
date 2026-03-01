import { useState, type FC } from "react";
import { Modal } from "./Modal"
import type { Card } from "../utils/api.types";

type PlaceModalProps = {
    isEditPlaceModalOpen: boolean;
    setEditPlaceModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onCreateCard: (card: Omit<Card, 'id'>) => void;
}

export const PlaceModal: FC<PlaceModalProps> = ({isEditPlaceModalOpen, setEditPlaceModalOpen, onCreateCard}) => {
    const [placeDescription, setPlaceDescription] = useState<string>('');
    const [placeLink, setPlaceLink] = useState<string>('');

    const handleEditPlaceModalClose = () => {
        setEditPlaceModalOpen(false);
        setPlaceDescription('');
        setPlaceLink('');
    }

    const handlePlaceSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(placeDescription && placeLink) {
            onCreateCard({
                image: placeLink,
                description: placeDescription,
                owner: { id: 1 },
                likes: []
            });
        }
        handleEditPlaceModalClose();
    }

    return (
        <Modal
            title={'Добавить место'}
            topInputLabel={'Описание'}
            topInputType={'text'}
            topInputId={'placeInput'}
            bottomInputLabel={'Ссылка'}
            bottomInputType={'url'}
            bottomInputId={'urlInput'}
            modalState={isEditPlaceModalOpen}
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
    )
}