import { useContext, type FC } from "react";
import { CurrentUserContext } from "../contexts/CurrenrtUserContext";
import type { Card } from "../utils/api.types";

export type CardProps = { 
    card: Card;
    handleQestionModalOpen: (card: Card) => void;
    onCardClick: (card: Card) => void;
    onCardLike: (card: Card) => void;
}

export const ImageCard: FC<CardProps> = ({card, handleQestionModalOpen, onCardClick, onCardLike}) => {
    const user = useContext(CurrentUserContext); 
    const isOwn = card.owner.id === user?.id;
    const isLiked = card.likes.some((like) => {
        return like.id === user?.id;
    });
    const cardLikeButtonClassName = `${isLiked ? 'like-button-active' : 'like-button'}`;
    
    const handleClick = () => {
        onCardClick(card);
    }
    const handleLikeClick = () => {
        onCardLike(card);
    }
    return (
        <div className="gallery-item">
            <img onClick={handleClick} src={card.image} />
            <div className="gallery-item-actions">
                <button onClick={handleLikeClick} className={cardLikeButtonClassName}>
                    <i className="fas fa-heart"></i>
                </button>
                <span className="gallery-card-description">{card.description}</span>
                {isOwn && <button onClick={() => handleQestionModalOpen(card)} className="delete-button">
                    <i className="fas fa-trash"></i>
                </button>}
            </div>
        </div>
    )
}