import { useContext, useRef, type FC } from "react";
import { CurrentUserContext } from "../contexts/CurrenrtUserContext";

type AvatarModalProps = {
    isEditAvatarModalOpen: boolean;
    setEditAvatarModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onUpdateAvatarUser: (userId: number, userAvatar: string) => void
}

export const AvatarModal: FC<AvatarModalProps> = ({isEditAvatarModalOpen, setEditAvatarModalOpen, onUpdateAvatarUser}) => {
    const currentUser = useContext(CurrentUserContext);
    const avatarRef = useRef<HTMLInputElement>(null);
    const handleEditAvatarModalClose = () => {
        setEditAvatarModalOpen(false);
    }

    const handleUserAvatarSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(currentUser && avatarRef.current) {
            const avatar = avatarRef.current.value;
            if(avatar) {
                onUpdateAvatarUser(currentUser.id, avatar);
                setEditAvatarModalOpen(false);
            }
        }
    }
    return (
        <div className={isEditAvatarModalOpen ? "modal-open" : "modal"}>
            <div className="modal-content">
                <span onClick={handleEditAvatarModalClose} className="close-button" id="closeModalBtn">&times;</span>
                <h2 className="modal-title">Сменить аватар?</h2>
                <form className="modal-form" id="profileForm" onSubmit={handleUserAvatarSubmit} noValidate>
                    <div className="form-group">
                        <label htmlFor="avatarInput">Ссылка</label>
                        <input 
                            type="url" 
                            id="avatarInput" 
                            ref={avatarRef}
                            className="form-input" 
                            required 
                        />
                    </div>
                    <div className="modal-buttons">

                        <button type="submit" className="modal-button">Сохранить</button>
                    </div>
                </form>
            </div>
        </div>                   
    )
}