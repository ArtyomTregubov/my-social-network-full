import type { FC } from "react";
import { Modal } from "./Modal"

type ProfileModalProps = {
    isEditProfileModalOpen: boolean;
    setEditProfileModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ProfileModal: FC<ProfileModalProps> = ({isEditProfileModalOpen, setEditProfileModalOpen}) => {
    const handleEditProfileModalClose = () => {
        setEditProfileModalOpen(false);
    }

    return (
        <Modal
            title={'Редактировать профиль'}
            topInputLabel={'Имя'}
            topInputType={'text'}
            topInputId={'nameInput'}
            bottomInputLabel={'Занятие'}
            bottomInputType={'text'}
            bottomInputId={'bioInput'}
            modalState={isEditProfileModalOpen}
            closeFunction={handleEditProfileModalClose} 
            leftButton={'Сохранить'} 
            rightButton={undefined} 
            typeOfModal={'submit'}
        />
    )
}