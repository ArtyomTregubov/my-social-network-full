import { GallerySection } from './GallerySection';
import { ProfileSection } from './ProfileSection';

export const Main = () => {
  return (
    <main className='main-content'>
      <ProfileSection />
      <GallerySection />
    </main>
  );
};
