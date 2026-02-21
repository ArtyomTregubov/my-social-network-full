import { useContext, type FC } from "react";
import type { Card } from "./App";
import { CurrentUserContext } from "../contexts/CurrenrtUserContext";

export type CardProps = { 
    card: Card;
    handleQestionModalOpen: () => void;
    onCardClick: (card: Card) => void;
}

export const ImageCard: FC<CardProps> = ({card, handleQestionModalOpen, onCardClick}) => {
    const user = useContext(CurrentUserContext); 
    const isOwn = card.owner.id === user?.id;
    console.log(typeof card.owner.id, typeof user?.id);
    
    const handleClick = () => {
        onCardClick(card)
    }
    return (
        <div className="gallery-item">
            <img onClick={handleClick} src={card.image} />
            <div className="gallery-item-actions">
                <button className="like-button active">
                    <i className="fas fa-heart"></i>
                </button>
                <span className="gallery-card-description">{card.description}</span>
                {isOwn && <button onClick={handleQestionModalOpen} className="delete-button">
                    <i className="fas fa-trash"></i>
                </button>}
            </div>
        </div>
    )
}