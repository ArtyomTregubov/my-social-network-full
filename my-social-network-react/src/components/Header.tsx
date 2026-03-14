import type { FC } from 'react';
import { useLocation } from 'react-router-dom';

type HeaderModalProps = {
  handleEditPlaceModalOpen: () => void;
};

export const Header: FC<HeaderModalProps> = ({ handleEditPlaceModalOpen }) => {
  const location = useLocation();
  const isMain = location.pathname === '/';

  return (
    <header className='header'>
      <h1 className='logo'>mySocialApp</h1>
      {isMain && (
        <button onClick={handleEditPlaceModalOpen} className='add-button' id='openModalBtn'>
          <i className='fas fa-plus'></i>
        </button>
      )}
    </header>
  );
};
