import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useStore } from '../hooks/UseStore';
import { Login } from './Auth/Login';
import { Register } from './Auth/Register';
import { AvatarModal } from './AvatarModal';
import { Footer } from './Footer';
import { Header } from './Header';
import { ImageModal } from './ImageModal';
import { Main } from './Main';
import { PlaceModal } from './PlaceModal';
import { ProfileModal } from './ProfileModal';
import { QestionModal } from './QestionModal';

const App = () => {
  const { userStore, cardStore } = useStore();

  useEffect(() => {
    userStore.fetchUser('1');
  }, []);

  useEffect(() => {
    cardStore.fetchCards();
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
      <ProfileModal />
      <PlaceModal />
      <AvatarModal />
      <QestionModal />
      <ImageModal />
    </>
  );
};

export default App;
