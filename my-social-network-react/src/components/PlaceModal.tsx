import type { FC } from "react";
import { Modal } from "./Modal"

type PlaceModalProps = {
    isEditPlaceModalOpen: boolean;
    setEditPlaceModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PlaceModal: FC<PlaceModalProps> = ({isEditPlaceModalOpen, setEditPlaceModalOpen}) => {
    const handleEditPlaceModalClose = () => {
        setEditPlaceModalOpen(false);
    }

    return (
        <Modal
            title={'Добавить место'}
            topInputLabel={'Название'}
            topInputType={'text'}
            topInputId={'placeInput'}
            bottomInputLabel={'Ссылка'}
            bottomInputType={'url'}
            bottomInputId={'urlInput'}
            modalState={isEditPlaceModalOpen}
            closeFunction={handleEditPlaceModalClose} 
            leftButton={'Сохранить'} 
            rightButton={undefined} 
            typeOfModal={'submit'}       
        />
    )
}