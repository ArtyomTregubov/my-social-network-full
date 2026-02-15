import type { FC } from "react";
import { Modal } from "./Modal"

type AvatarModalProps = {
    isEditAvatarModalOpen: boolean;
    setEditAvatarModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AvatarModal: FC<AvatarModalProps> = ({isEditAvatarModalOpen, setEditAvatarModalOpen}) => {
    const handleEditAvatarModalClose = () => {
        setEditAvatarModalOpen(false);
    }

    return (
        <Modal
        title={'Изменить аватар'}
        topInputLabel={'Ссылка'}
        topInputType={'url'}
        topInputId={'avatarInput'}
        bottomInputLabel={'disabled'}
        bottomInputType={'disabled'}
        bottomInputId={undefined}
        modalState={isEditAvatarModalOpen}
        closeFunction={handleEditAvatarModalClose}
        leftButton={'Сохранить'} 
        rightButton={undefined}
        />
    )
}