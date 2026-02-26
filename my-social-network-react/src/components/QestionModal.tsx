import type { FC } from "react";
import { Modal } from "./Modal"
import type { Card } from "../utils/api.types";

type QestionModalProps = {
    isQestionModalOpen: boolean;
    setQestionModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onCardDelete: (card: Card) => void;
    card: Card | null;
}

export const QestionModal: FC<QestionModalProps> = ({card, onCardDelete, isQestionModalOpen, setQestionModalOpen}) => {
    const handleQestionModalClose = () => {
        setQestionModalOpen(false);
    }

    const handleDeleteClick = () => {
        if (card) {
            onCardDelete(card);
        }
        handleQestionModalClose();
    }

    return (
        <Modal
        title={'Вы уверены?'}
        topInputLabel={'disabled'}
        topInputType={'disabled'}
        topInputId={undefined}
        bottomInputLabel={'disabled'}
        bottomInputType={'disabled'}
        bottomInputId={undefined}
        modalState={isQestionModalOpen}
        closeFunction={handleQestionModalClose}
        leftButton={'Да'} 
        rightButton={'Нет'}
        actionFunction={handleDeleteClick}
        typeOfModal={'button'}
        />
    )
}