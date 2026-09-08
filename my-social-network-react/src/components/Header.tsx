import { useLocation } from 'react-router-dom';
import { useStore } from '../hooks/UseStore';

export const Header = () => {
  const { cardStore } = useStore();
  const location = useLocation();
  const isMain = location.pathname === '/';

  return (
    <header className='header'>
      <h1 className='logo'>mySocialApp</h1>
      {isMain && (
        <button onClick={() => cardStore.setAddCardModalOpen(true)} className='add-button' id='openModalBtn'>
          <i className='fas fa-plus'></i>
        </button>
      )}
    </header>
  );
};
