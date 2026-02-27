import { useContext, useEffect, useState, type FC } from "react";
import { Modal } from "./Modal"
import { CurrentUserContext } from "../contexts/CurrenrtUserContext";

type ProfileModalProps = {
    isEditProfileModalOpen: boolean;
    setEditProfileModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onUpdateUser: (user: number, userName: string, userDescription: string) => void;
}

export const ProfileModal: FC<ProfileModalProps> = ({onUpdateUser, isEditProfileModalOpen, setEditProfileModalOpen}) => {
    const [name, setName] = useState<string | undefined>(undefined);
    const [description, setDescription] = useState<string | undefined>(undefined);
    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser?.userName);
        setDescription(currentUser?.userDescription)
    })

    const handleEditProfileModalClose = () => {
        setEditProfileModalOpen(false);
    }

    const handleUserDataSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(currentUser && name && description) {
            onUpdateUser(currentUser.id, name, description)
        }
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
            topInputValue={name}
            bottomInputValue={description}
        />
    )
}