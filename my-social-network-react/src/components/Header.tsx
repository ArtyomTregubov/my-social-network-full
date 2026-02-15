import type { FC } from "react";

type HeaderModalProps = {
    handleEditPlaceModalOpen: () => void;
}

export const Header: FC<HeaderModalProps> = ({handleEditPlaceModalOpen}) => {
     return (
        <header className="header">
        <h1 className="logo">mySocialApp</h1>
        <button onClick={handleEditPlaceModalOpen} className="add-button" id="openModalBtn">
            <i className="fas fa-plus"></i>
        </button>
        </header>)
}

