import type { FC } from "react";
import type { Card } from "../utils/api.types";

export type ImageModalProps = {
    card: Card | null;
    isImageModalOpen: boolean;
    setImageModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ImageModal: FC<ImageModalProps> = ({card, setImageModalOpen, isImageModalOpen}) => {
    const handleImageModalClose = () => {
        setImageModalOpen(false);
    }
    return (
        <div className={card && isImageModalOpen ? 'modal-open' : 'modal' }>
            <div className="modal-content-image" 
                 style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    color: 'fff',
                    borderRadius: '12px', 
                    backgroundImage:  `url(${card?.image})`,
                    backgroundSize: 'cover', 
                    position: 'relative',
                    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
                    height: '100%',
                    maxHeight: '800px',
                    width: '100%',
                    maxWidth: '600px'
                 }}>
                <span onClick={handleImageModalClose} 
                      className="close-button-image"
                      style={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1.5rem',
                        fontSize: '1.5rem',
                        color: '#fff',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                      >&times;
                </span>
                <div style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',  
                    padding: '12px', 
                    borderRadius: '12px 12px 0 0',
                }}>
                    <h2 style={{
                        color: '#fff', 
                        fontSize: '24px', 
                        fontWeight: 'bold', 
                        transition: 'all 0.3s ease'
                        }}>Картинка
                    </h2>
                </div>
                <div style={{
                     background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',  
                     padding: '12px', 
                     borderRadius: '0 0 12px 12px',
                }}>
                    <p className="modal-description-image"
                       style={{color: '#fff', fontSize: '16px', transition: 'all 0.3s ease'}}
                    >{card?.description}</p>
                </div>
            </div>
        </div>
    )
}