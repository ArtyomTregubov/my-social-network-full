import type { FC } from "react";
import { ImageCard } from "./ImageCard";
import type { Card } from "./App";

type GallerySectionMainProps = {
    handleQestionModalOpen: () => void;
    gallaryCards: Card[];
    onCardClick:  (card: Card) => void;
}

export const GallerySection: FC<GallerySectionMainProps> = ({ gallaryCards, handleQestionModalOpen, onCardClick }) => {
    return (
            <section className="gallery-section">
                <h3 className="gallery-title">Мои фотографии</h3>
                 <div className="gallery-grid">
                    { gallaryCards.map((card) => (
                        <ImageCard
                         onCardClick={onCardClick}
                         handleQestionModalOpen={handleQestionModalOpen} 
                         card={card}
                         key={card.id}
                        />
                    ))}
                </div> 
            </section>
    )
}