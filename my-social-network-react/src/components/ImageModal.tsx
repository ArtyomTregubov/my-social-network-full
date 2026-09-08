import { observer } from 'mobx-react';
import { useStore } from '../hooks/UseStore';

export const ImageModal = observer(() => {
  const { cardStore } = useStore();

  return (
    <div className={cardStore.selectedCard && cardStore.isImageCardModalOpen ? 'modal-open' : 'modal'}>
      <div
        className='modal-content-image'
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          color: 'fff',
          borderRadius: '12px',
          backgroundImage: `url(${cardStore.selectedCard?.image})`,
          backgroundSize: 'cover',
          position: 'relative',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.2)',
          height: '100%',
          maxHeight: '800px',
          width: '100%',
          maxWidth: '600px'
        }}
      >
        <span
          onClick={() => cardStore.setImageCardModalOpen(false)}
          className='close-button-image'
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1.5rem',
            fontSize: '1.5rem',
            color: '#fff',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
        >
          &times;
        </span>
        <div
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
            padding: '12px',
            borderRadius: '12px 12px 0 0'
          }}
        >
          <h2
            style={{
              color: '#fff',
              fontSize: '24px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
          >
            Картинка
          </h2>
        </div>
        <div
          style={{
            background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
            padding: '12px',
            borderRadius: '0 0 12px 12px'
          }}
        >
          <p
            className='modal-description-image'
            style={{ color: '#fff', fontSize: '16px', transition: 'all 0.3s ease' }}
          >
            {cardStore.selectedCard?.description}
          </p>
        </div>
      </div>
    </div>
  );
});
