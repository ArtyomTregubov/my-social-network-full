import type { FC } from "react";
import { Modal } from "./Modal"

type QestionModalProps = {
    isQestionModalOpen: boolean;
    setQestionModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const QestionModal: FC<QestionModalProps> = ({isQestionModalOpen, setQestionModalOpen}) => {
    const handleQestionModalClose = () => {
        setQestionModalOpen(false);
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
        />
    )
}